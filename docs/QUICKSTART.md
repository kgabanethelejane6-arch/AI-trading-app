# Quick Reference Guide

## Starting Development

```bash
# Clone and setup
git clone https://github.com/kgabanethelejane6-arch/AI-trading-app.git
cd AI-trading-app

# Start everything with Docker
docker-compose up

# In new terminal - or access http://localhost:3000
```

## Project URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **GitHub**: https://github.com/kgabanethelejane6-arch/AI-trading-app

## Key Files

```
ai-trading-app/
├── backend/
│   ├── main.py              # FastAPI entry point
│   ├── models.py            # Database models
│   ├── schemas.py           # Pydantic schemas
│   ├── auth.py              # Authentication
│   ├── database.py          # Database config
│   ├── config.py            # Configuration
│   ├── api/
│   │   └── endpoints/       # API routes
│   └── requirements.txt      # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # Main app component
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable components
│   │   ├── store/           # Redux store
│   │   ├── services/        # API services
│   │   └── index.tsx        # Entry point
│   ├── package.json         # Node dependencies
│   └── tailwind.config.js   # Tailwind config
├── docker-compose.yml       # Docker services
├── .env.example             # Environment template
└── docs/                    # Documentation
```

## Common Commands

### Docker
```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop all
docker-compose down

# Rebuild
docker-compose build
```

### Backend
```bash
# Install dependencies
cd backend
pip install -r requirements.txt

# Run server
uvicorn main:app --reload

# Access shell
cd backend && python -c "import main"
```

### Frontend
```bash
# Install dependencies
cd frontend
npm install

# Start dev server
npm start

# Build
npm run build

# Tests
npm test
```

## API Endpoints

### Auth
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `GET /auth/me` - Get current user

### Portfolio
- `POST /portfolio/create` - Create portfolio
- `GET /portfolio/list` - List user portfolios
- `GET /portfolio/{id}` - Get portfolio details

### Trades
- `POST /trades/create` - Create trade
- `GET /trades/history/{portfolio_id}` - Trade history

### Market
- `GET /market/quote/{symbol}` - Stock quote
- `GET /market/history/{symbol}` - Historical data
- `GET /market/search` - Search stocks

### Analysis
- `POST /analysis/technical/{symbol}` - Technical analysis
- `POST /analysis/sentiment/{symbol}` - Sentiment analysis
- `POST /analysis/ai-recommendation/{symbol}` - AI recommendation

### Alerts
- `POST /alerts/create` - Create alert
- `GET /alerts/list` - List alerts

## Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Changes**
   - Edit files
   - Test locally

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

4. **Push & Create PR**
   ```bash
   git push origin feature/feature-name
   ```
   - Create Pull Request on GitHub
   - Add description and link issues

5. **Code Review**
   - Address feedback
   - Push updates

6. **Merge**
   - Squash and merge to main
   - Delete feature branch

## Debugging

### Backend Errors
1. Check logs: `docker-compose logs backend`
2. API docs: http://localhost:8000/docs
3. Database: `psql -d ai_trading -U trader`

### Frontend Errors
1. Browser console (F12)
2. Redux DevTools extension
3. React Developer Tools

### Database Issues
1. Verify PostgreSQL running
2. Check `.env` DATABASE_URL
3. View tables: `\dt` in psql

## Performance Tips

- Use Redux DevTools to debug state
- Check Network tab in browser
- Profile with React DevTools
- Use database query analyzer
- Cache API responses with React Query

## Resource Limits

- Frontend: 3000 (fixed)
- Backend: 8000 (fixed)
- PostgreSQL: 5432 (fixed)
- Redis: 6379 (fixed)

## Next Steps

1. Read docs/SETUP.md for detailed setup
2. Read docs/ARCHITECTURE.md for system design
3. Read docs/API.md for API documentation
4. Check CONTRIBUTING.md for contribution guidelines
