import numpy as np

class LunarLandingScorer:
    """Machine Learning scoring model for lunar landing sites combining engineering safety and scientific ROI."""
    
    def __init__(self):
        self.w_slope = -0.35      # Lower slope is safer
        self.w_illum = 0.30       # Higher illumination is preferred for solar power
        self.w_ice = -0.20        # Shorter distance to water ice shadow regions is higher value
        self.w_roughness = -0.15  # Lower surface roughness reduces landing gear risk

    def predict_site_score(self, slope: float, illumination: float, ice_dist: float, roughness: float) -> tuple[float, float, float]:
        """Calculates safety score, scientific score, and composite suitability score."""
        norm_slope = min(slope / 30.0, 1.0)
        norm_illum = illumination / 100.0
        norm_ice = min(ice_dist / 50.0, 1.0)
        norm_rough = min(roughness / 1.0, 1.0)

        safety_score = max(0.0, min(100.0, (1.0 - norm_slope) * 60 + (1.0 - norm_rough) * 40))
        scientific_val = max(0.0, min(100.0, (1.0 - norm_ice) * 70 + norm_illum * 30))

        composite = (safety_score * 0.6) + (scientific_val * 0.4)
        return round(safety_score, 2), round(scientific_val, 2), round(composite, 2)

scorer_model = LunarLandingScorer()
