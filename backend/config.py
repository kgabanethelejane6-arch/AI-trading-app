import os
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://trader:tradersecure123@localhost:5432/ai_trading"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # API Keys
    OPENAI_API_KEY: str = ""
    ALPHAVANTAGE_API_KEY: str = ""
    
    # JWT
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Environment
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    # App
    APP_NAME: str = "AI Trading App"
    APP_VERSION: str = "1.0.0"
    
    class Config:
        env_file = "../.env"
        case_sensitive = True

settings = Settings()
