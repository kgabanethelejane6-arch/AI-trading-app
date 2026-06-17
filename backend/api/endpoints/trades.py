from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import uuid

from database import get_db
from models import Trade, Portfolio, User
from schemas import TradeCreate, TradeResponse
from auth import get_current_user

router = APIRouter()

@router.post("/create", response_model=TradeResponse)
async def create_trade(
    trade_data: TradeCreate,
    portfolio_id: str,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Create a new trade"""
    # Get user
    stmt = select(User).where(User.email == current_user.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Create trade
    new_trade = Trade(
        id=str(uuid.uuid4()),
        user_id=user.id,
        portfolio_id=portfolio_id,
        symbol=trade_data.symbol,
        trade_type=trade_data.trade_type,
        quantity=trade_data.quantity,
        price=trade_data.price,
        ai_recommendation=trade_data.ai_recommendation,
        confidence=trade_data.confidence
    )
    db.add(new_trade)
    await db.commit()
    await db.refresh(new_trade)
    
    return new_trade

@router.get("/history/{portfolio_id}")
async def get_trade_history(
    portfolio_id: str,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get trade history for a portfolio"""
    stmt = select(Trade).where(Trade.portfolio_id == portfolio_id)
    result = await db.execute(stmt)
    trades = result.scalars().all()
    
    return trades
