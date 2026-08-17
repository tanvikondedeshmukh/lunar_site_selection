from fastapi import APIRouter, HTTPException
from typing import List
import pandas as pd
import numpy as np
import os

from app.schemas.site import LandingSiteRequest, SitePredictionResult, BatchPredictionResponse
from app.core.model import scorer_model
from app.core.analyzer import evaluate_site_viability

router = APIRouter()

DATA_FILE = os.path.join(os.path.dirname(__file__), "../../../data/candidate_sites.csv")

@router.get("/health", tags=["Health"])
def health_check():
    return {"status": "healthy", "system": "Lunar Satellite Landing Site Predictor API", "version": "1.0.0"}

@router.post("/predict/single", response_model=SitePredictionResult, tags=["Predictions"])
def predict_single_site(req: LandingSiteRequest):
    synthetic_slope = float(abs(np.sin(req.latitude) * 12.0) + (abs(req.longitude) % 8.0))
    synthetic_illum = float(max(10.0, 100.0 - abs(req.latitude) * 0.8))
    synthetic_ice_dist = float(abs(90.0 - abs(req.latitude)) * 3.5 + (req.longitude % 15))
    synthetic_roughness = float((synthetic_slope / 40.0) + 0.05)

    is_viable, rec = evaluate_site_viability(
        synthetic_slope, synthetic_illum, synthetic_roughness, req.max_slope_deg, req.min_illumination_pct
    )

    safety, sci_val, composite = scorer_model.predict_site_score(
        synthetic_slope, synthetic_illum, synthetic_ice_dist, synthetic_roughness
    )

    return SitePredictionResult(
        site_id=f"SITE-{abs(int(req.latitude))}-{abs(int(req.longitude))}",
        latitude=req.latitude,
        longitude=req.longitude,
        safety_score=safety,
        scientific_value=sci_val,
        overall_rank_score=composite if is_viable else composite * 0.3,
        is_viable=is_viable,
        slope_deg=round(synthetic_slope, 2),
        illumination_pct=round(synthetic_illum, 2),
        ice_distance_km=round(synthetic_ice_dist, 2),
        recommendation=rec
    )

@router.post("/predict/batch", response_model=BatchPredictionResponse, tags=["Predictions"])
def predict_batch_sites(req: LandingSiteRequest):
    if os.path.exists(DATA_FILE):
        df = pd.read_csv(DATA_FILE)
    else:
        lats = np.linspace(-89.5, -80.0, 10)
        lons = np.linspace(-180.0, 180.0, 10)
        rows = []
        for la in lats:
            for lo in lons:
                rows.append({"site_id": f"LUNAR-{abs(int(la))}-{int(lo)}", "latitude": la, "longitude": lo})
        df = pd.DataFrame(rows)

    viable_count = 0
    results = []

    for _, row in df.iterrows():
        la, lo = row["latitude"], row["longitude"]
        slp = float(abs(np.sin(la * 0.1) * 10.0) + (abs(lo) % 6.0))
        ill = float(max(15.0, 95.0 - abs(la) * 0.7))
        ice = float(abs(-90.0 - la) * 2.5 + (abs(lo) % 10))
        rough = float(slp / 35.0)

        viable, rec = evaluate_site_viability(slp, ill, rough, req.max_slope_deg, req.min_illumination_pct)
        if viable:
            viable_count += 1

        safety, sci_val, composite = scorer_model.predict_site_score(slp, ill, ice, rough)

        results.append(SitePredictionResult(
            site_id=str(row.get("site_id", f"SITE-{int(la)}-{int(lo)}")),
            latitude=la,
            longitude=lo,
            safety_score=safety,
            scientific_value=sci_val,
            overall_rank_score=composite if viable else composite * 0.2,
            is_viable=viable,
            slope_deg=round(slp, 2),
            illumination_pct=round(ill, 2),
            ice_distance_km=round(ice, 2),
            recommendation=rec
        ))

    results.sort(key=lambda x: x.overall_rank_score, reverse=True)

    return BatchPredictionResponse(
        total_analyzed=len(results),
        viable_sites_count=viable_count,
        top_candidates=results[:15]
    )
