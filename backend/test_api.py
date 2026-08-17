import numpy as np

def calculate_slope(elevation_grid: np.ndarray, pixel_size_m: float = 100.0) -> np.ndarray:
    """Calculates terrain slope in degrees using Sobel gradients from DEM grid."""
    gy, gx = np.gradient(elevation_grid, pixel_size_m)
    slope_rad = np.arctan(np.sqrt(gx**2 + gy**2))
    return np.degrees(slope_rad)

def evaluate_site_viability(slope: float, illumination: float, boulder_density: float, max_slope: float, min_illum: float) -> tuple[bool, str]:
    """Determines whether a site passes engineering constraints."""
    reasons = []
    if slope > max_slope:
        reasons.append(f"Slope {slope:.1f}° exceeds max allowed ({max_slope}°)")
    if illumination < min_illum:
        reasons.append(f"Illumination {illumination:.1f}% below threshold ({min_illum}%)")
    if boulder_density > 0.35:
        reasons.append(f"High boulder density ({boulder_density:.2f})")
        
    if not reasons:
        return True, "Passed all engineering safety and illumination constraints."
    return False, "Unviable: " + "; ".join(reasons)
