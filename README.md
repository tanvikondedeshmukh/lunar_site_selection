# 🌕 Lunar Satellite Landing Site Prediction System

An end-to-end Machine Learning & Computer Vision application to predict, analyze, and rank safe landing sites at the Lunar South Pole using satellite topographic data (LROC / LOLA Digital Elevation Models).

---

## 📁 Repository Structure

```text
Lunar-satelite-landing/
│
├── backend/                  # FastAPI Python Service
│   ├── app/
│   │   ├── api/              # REST API Routes (/predict/single, /predict/batch, /health)
│   │   ├── core/             # ML Model & Terrain Analysis (Slope, Illumination, Ice)
│   │   ├── schemas/          # Pydantic Schemas
│   │   ├── config.py         # Application configuration
│   │   └── main.py           # FastAPI entry point
│   ├── tests/                # Pytest unit tests
│   ├── Dockerfile            # Container definition
│   └── requirements.txt      # Dependencies
│
├── frontend/                 # React Web Application
│   ├── public/               # Static assets & HTML template
│   ├── src/
│   │   ├── components/       # Header, ParameterControls, MapView, ResultsPanel
│   │   ├── services/         # Axios API client
│   │   ├── App.js            # Main dashboard component
│   │   └── App.css           # Dark space UI theme
│   ├── Dockerfile            # Container definition
│   └── package.json          # Dependencies
│
├── data/                     # Lunar DEM datasets & Candidate coordinates
│   ├── candidate_sites.csv   # South pole candidate site dataset
│   └── sample_lunar_dem.json # LRO LOLA metadata
│
├── models/                   # Pre-trained ML Scorer Weights
│   └── site_scorer.pkl       # Serialized ML model weights
│
├── docs/                     # System Architecture & Math Documentation
│   └── ARCHITECTURE.md       # Detailed technical architecture
│
├── docker-compose.yml        # Multi-container Docker orchestration
└── README.md                 # Complete documentation
```

---

## 🚀 Quick Start

### 1. Using Docker Compose (Recommended)
```bash
docker-compose up --build
```
- **Frontend Dashboard**: `http://localhost:3000`
- **Backend API Docs**: `http://localhost:8000/docs`

### 2. Manual Development Setup

#### Backend Setup:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### Frontend Setup:
```bash
cd frontend
npm install
npm start
```
