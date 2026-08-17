import React from 'react';

function ParameterControls({ params, setParams, onRunPrediction, loading }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="control-card">
      <h2>⚙️ Engineering Constraints</h2>
      
      <div className="input-group">
        <label>Target Latitude (°S): <strong>{params.latitude}°</strong></label>
        <input 
          type="range" min="-89.9" max="-70.0" step="0.1" 
          name="latitude" value={params.latitude} onChange={handleChange} 
        />
      </div>

      <div className="input-group">
        <label>Target Longitude (°E/W): <strong>{params.longitude}°</strong></label>
        <input 
          type="range" min="-180.0" max="180.0" step="0.5" 
          name="longitude" value={params.longitude} onChange={handleChange} 
        />
      </div>

      <div className="input-group">
        <label>Max Allowable Slope (°): <strong>{params.max_slope_deg}°</strong></label>
        <input 
          type="range" min="5.0" max="25.0" step="0.5" 
          name="max_slope_deg" value={params.max_slope_deg} onChange={handleChange} 
        />
      </div>

      <div className="input-group">
        <label>Min Solar Illumination (%): <strong>{params.min_illumination_pct}%</strong></label>
        <input 
          type="range" min="10.0" max="80.0" step="1.0" 
          name="min_illumination_pct" value={params.min_illumination_pct} onChange={handleChange} 
        />
      </div>

      <button className="btn-primary" onClick={onRunPrediction} disabled={loading}>
        {loading ? "Analyzing Satellite DEM Data..." : "🚀 Predict Viable Landing Sites"}
      </button>
    </div>
  );
}

export default ParameterControls;
