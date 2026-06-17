from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import uuid

from database import get_db
from models import Alert, User
from schemas import AlertCreate, AlertResponse
from auth import get_current_user

router = APIRouter()

@router.post("/create", response_model=AlertResponse)
async def create_alert(
    alert_data: AlertCreate,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Create a new price alert"""
    stmt = select(User).where(User.email == current_user.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    new_alert = Alert(
        id=str(uuid.uuid4()),
        user_id=user.id,
        symbol=alert_data.symbol,
        alert_type=alert_data.alert_type,
        condition=alert_data.condition,
        threshold=alert_data.threshold
    )
    db.add(new_alert)
    await db.commit()
    await db.refresh(new_alert)
    
    return new_alert

@router.get("/list")
async def list_alerts(
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get all alerts for user"""
    stmt = select(User).where(User.email == current_user.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user.alerts
