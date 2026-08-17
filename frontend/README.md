# 🛸 Lunar Landing Site Explorer - Frontend App

Interactive React web dashboard for visualizing Lunar South Pole landing candidate sites, adjusting safety weights, and displaying real-time geospatial terrain metrics.

---

### 📂 Directory Structure

```text
frontend/
├── public/
│   └── index.html            # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation and header UI
│   │   ├── MapView.js         # Interactive 2D/3D lunar map view
│   │   ├── ParameterControls.js # Weight sliders (Slope, Illumination, Hazard)
│   │   └── ResultsPanel.js    # Ranked sites table & summary metrics
│   ├── services/
│   │   └── api.js            # Axios HTTP client for backend endpoints
│   ├── App.css               # Space-themed styles & layout rules
│   ├── App.js                # Main React layout component
│   └── index.js              # React application root
└── package.json              # NPM dependencies & build scripts
```

---

### 🛠️ Tech Stack

* **Core:** React 18+
* **HTTP Client:** Axios
* **Visualization:** Leaflet / OpenLayers / Three.js (Lunar DEM rendering)
* **Styling:** CSS3 (Dark Mode / NASA-inspired space UI)

---

### ⚡ Getting Started

**1. Install Dependencies**
```bash
npm install
```

**2. Configure Environment**
Create a `.env` file in the `frontend/` root:
```env
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
```

**3. Start Development Server**
```bash
npm start
```
App runs locally at `http://localhost:3000`.

---

### 📦 Build for Production

```bash
npm run build
```
Generates production-ready static assets in the `build/` directory.
