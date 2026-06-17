from fastapi import APIRouter
from api.endpoints import auth, users, portfolio, trades, market, analysis, alerts

router = APIRouter()

# Include route modules
router.include_router(auth.router, prefix="/auth", tags=["auth"])
router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(portfolio.router, prefix="/portfolio", tags=["portfolio"])
router.include_router(trades.router, prefix="/trades", tags=["trades"])
router.include_router(market.router, prefix="/market", tags=["market"])
router.include_router(analysis.router, prefix="/analysis", tags=["analysis"])
router.include_router(alerts.router, prefix="/alerts", tags=["alerts"])
