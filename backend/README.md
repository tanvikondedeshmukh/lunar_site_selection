# 🚀 Lunar Landing Site Prediction - Backend API

FastAPI web service for processing lunar DEM data, calculating terrain metrics (slope, roughness, illumination), and predicting landing suitability using trained Machine Learning models.

---

### 📂 Directory Structure

```text
backend/
├── app/
│   ├── api/
│   │   └── routes.py         # REST endpoints (/predict/single, /predict/batch, /health)
│   ├── core/
│   │   ├── analyzer.py       # Terrain analysis (slope, roughness calculation)
│   │   └── model.py          # ML scoring & inference engine
│   ├── schemas/
│   │   └── site.py           # Pydantic data models & request/response schemas
│   ├── config.py             # Environment configuration & settings
│   └── main.py               # FastAPI application entry point
├── tests/
│   └── test_api.py           # Pytest unit & integration test suite
└── requirements.txt          # Python dependencies
```

---

### 🛠️ Tech Stack

* **Framework:** FastAPI (Python 3.10+)
* **Data Processing:** NumPy, Pandas, SciPy, Rasterio
* **Machine Learning:** Scikit-Learn / XGBoost
* **Validation:** Pydantic v2
* **Testing:** Pytest, HTTPX

---

### ⚡ Getting Started

**1. Create a Virtual Environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

**2. Install Dependencies**
```bash
pip install -r requirements.txt
```

**3. Run the Development Server**
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Access Interactive API Documentation at `http://localhost:8000/docs`.

---

### 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Service health check and status |
| `POST` | `/api/v1/predict/single` | Evaluate safety score for a single coordinate set |
| `POST` | `/api/v1/predict/batch` | Bulk evaluate candidate landing sites from CSV/JSON payload |

---

### 🧪 Running Tests

```bash
pytest tests/ -v
```
