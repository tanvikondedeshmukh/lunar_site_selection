# System Architecture & Technical Specification

## Overview
The Lunar Satellite Landing Site Prediction System is designed to evaluate, rank, and identify safe and scientifically valuable landing sites on the lunar surface (specifically targeting the Lunar South Pole region).

## Mathematical Scoring Model
The system calculates a composite score $S_{total}$ based on engineering constraints and scientific objectives:

$$S_{total} = w_1 \cdot S_{safety} + w_2 \cdot V_{science}$$

Where:
- $S_{safety} = (1 - \frac{\theta}{\theta_{max}}) \times 60 + (1 - R) \times 40$
- $V_{science} = (1 - \frac{d_{ice}}{d_{max}}) \times 70 + I_{solar} \times 30$
- $\theta$: Local terrain slope (degrees)
- $R$: Surface roughness index
- $d_{ice}$: Distance to permanently shadowed region containing water ice (km)
- $I_{solar}$: Normalized annual solar illumination ratio [0, 1]

## Service Communication
1. **Frontend (React)** communicates via REST calls to **Backend (FastAPI)**.
2. **Backend API** runs NumPy / PyTorch / Scikit-Learn pipelines over DEM raster grids.
3. **Data Layer** stores pre-computed LOLA/LROC datasets.
