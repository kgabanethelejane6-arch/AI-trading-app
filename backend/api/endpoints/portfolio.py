from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import uuid

from database import get_db
from models import Portfolio, User
from schemas import PortfolioCreate, PortfolioResponse, PortfolioUpdate
from auth import get_current_user

router = APIRouter()

@router.post("/create", response_model=PortfolioResponse)
async def create_portfolio(
    portfolio_data: PortfolioCreate,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Create a new portfolio"""
    # Get user
    stmt = select(User).where(User.email == current_user.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Create portfolio
    new_portfolio = Portfolio(
        id=str(uuid.uuid4()),
        user_id=user.id,
        name=portfolio_data.name,
        description=portfolio_data.description,
        initial_balance=portfolio_data.initial_balance,
        current_balance=portfolio_data.initial_balance
    )
    db.add(new_portfolio)
    await db.commit()
    await db.refresh(new_portfolio)
    
    return new_portfolio

@router.get("/list")
async def list_portfolios(
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get all portfolios for user"""
    stmt = select(User).where(User.email == current_user.email)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    portfolios = user.portfolios
    return portfolios

@router.get("/{portfolio_id}", response_model=PortfolioResponse)
async def get_portfolio(
    portfolio_id: str,
    current_user = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get portfolio details"""
    stmt = select(Portfolio).where(Portfolio.id == portfolio_id)
    result = await db.execute(stmt)
    portfolio = result.scalar_one_or_none()
    
    if not portfolio:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Portfolio not found"
        )
    
    return portfolio
