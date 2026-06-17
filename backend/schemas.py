from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# User Schemas
class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    full_name: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    email: str
    username: str
    full_name: Optional[str]
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# Portfolio Schemas
class PortfolioCreate(BaseModel):
    name: str
    description: Optional[str] = None
    initial_balance: float

class PortfolioUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    current_balance: Optional[float] = None

class PortfolioResponse(BaseModel):
    id: str
    name: str
    description: Optional[str]
    initial_balance: float
    current_balance: float
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

# Position Schemas
class PositionCreate(BaseModel):
    symbol: str
    quantity: float
    entry_price: float

class PositionResponse(BaseModel):
    id: str
    symbol: str
    quantity: float
    entry_price: float
    current_price: float
    created_at: datetime
    
    class Config:
        from_attributes = True

# Trade Schemas
class TradeCreate(BaseModel):
    symbol: str
    trade_type: str
    quantity: float
    price: float
    ai_recommendation: Optional[str] = None
    confidence: Optional[float] = None

class TradeResponse(BaseModel):
    id: str
    symbol: str
    trade_type: str
    quantity: float
    price: float
    timestamp: datetime
    ai_recommendation: Optional[str]
    confidence: Optional[float]
    
    class Config:
        from_attributes = True

# Market Data Schemas
class MarketDataResponse(BaseModel):
    symbol: str
    timestamp: datetime
    open: float
    high: float
    low: float
    close: float
    volume: int
    
    class Config:
        from_attributes = True

# Alert Schemas
class AlertCreate(BaseModel):
    symbol: str
    alert_type: str
    condition: str
    threshold: Optional[float] = None

class AlertResponse(BaseModel):
    id: str
    symbol: str
    alert_type: str
    condition: str
    threshold: Optional[float]
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Analysis Schemas
class AnalysisResponse(BaseModel):
    id: str
    symbol: str
    analysis_type: str
    result: dict
    confidence: float
    timestamp: datetime
    
    class Config:
        from_attributes = True
