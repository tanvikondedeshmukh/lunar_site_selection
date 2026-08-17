:root {
  --bg-primary: #0b0e14;
  --bg-secondary: #161b22;
  --card-bg: #1f242d;
  --text-main: #e6edf3;
  --text-muted: #8b949e;
  --accent-cyan: #38bdf8;
  --accent-green: #22c55e;
  --accent-red: #ef4444;
  --accent-yellow: #eab308;
  --border-color: #30363d;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.moon-icon {
  font-size: 2rem;
}

.app-header h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  margin: 0;
  letter-spacing: 1px;
  color: var(--accent-cyan);
}

.subtitle {
  margin: 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-family: 'Orbitron', sans-serif;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--accent-red);
}

.status-dot.active {
  background-color: var(--accent-green);
  box-shadow: 0 0 8px var(--accent-green);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 320px 1fr 380px;
  gap: 1.5rem;
  padding: 1.5rem;
  flex: 1;
}

.control-card, .map-card, .results-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
  color: var(--text-main);
}

.input-group {
  margin-bottom: 1.2rem;
}

.input-group label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  color: var(--text-muted);
}

.input-group input[type="range"] {
  width: 100%;
  accent-color: var(--accent-cyan);
}

.btn-primary {
  width: 100%;
  padding: 0.8rem;
  background-color: var(--accent-cyan);
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  transition: opacity 0.2s;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Map Canvas Styles */
.lunar-surface-canvas {
  position: relative;
  height: 380px;
  background: radial-gradient(circle, #2a2f3a 0%, #11141a 100%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

.map-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.pin-dot {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
}

.map-pin.viable .pin-dot { background-color: var(--accent-green); }
.map-pin.unviable .pin-dot { background-color: var(--accent-red); }
.map-pin.selected .pin-dot { 
  background-color: var(--accent-yellow); 
  transform: scale(1.5);
  box-shadow: 0 0 12px var(--accent-yellow);
}

.map-legend {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.8rem;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
}
.viable-dot { background-color: var(--accent-green); }
.unviable-dot { background-color: var(--accent-red); }
.selected-dot { background-color: var(--accent-yellow); }

/* Results & Metrics */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.metric-box {
  background-color: var(--bg-secondary);
  padding: 0.8rem;
  border-radius: 8px;
}

.metric-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.metric-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
}

.metric-value.highlight {
  color: var(--accent-cyan);
}

.status-pill {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-pill.pass { background-color: rgba(34, 197, 94, 0.2); color: var(--accent-green); }
.status-pill.fail { background-color: rgba(239, 68, 68, 0.2); color: var(--accent-red); }

.recommendation-box {
  background-color: var(--bg-secondary);
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  border-left: 3px solid var(--accent-cyan);
  margin-bottom: 1.2rem;
}

.table-wrapper {
  max-height: 220px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

th {
  color: var(--text-muted);
  font-weight: 600;
}

.table-row:hover {
  background-color: var(--bg-secondary);
  cursor: pointer;
}
