import os

class Settings:
    PROJECT_NAME: str = "Lunar Satellite Landing Site Prediction System"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api/v1"
    MODEL_PATH: str = os.getenv("MODEL_PATH", "../models/site_scorer.pkl")
    DATA_PATH: str = os.getenv("DATA_PATH", "../data/candidate_sites.csv")

settings = Settings()
