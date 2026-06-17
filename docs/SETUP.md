# Setup Instructions

## Prerequisites

### Required
- Docker 20.10+
- Docker Compose 2.0+
- Or manually:
  - Python 3.10+
  - Node.js 18+
  - PostgreSQL 15+
  - Redis 7+

### Environment Variables

1. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Update with your values:
```env
# Database
DB_USER=trader
DB_PASSWORD=your_secure_password
DB_NAME=ai_trading

# API Keys
OPENAI_API_KEY=your_openai_key
ALPHAVANTAGE_API_KEY=your_alphavantage_key

# Environment
ENVIRONMENT=development
DEBUG=True
```

## Docker Setup (Recommended)

### Quick Start

1. Navigate to project directory:
```bash
cd AI-trading-app
```

2. Start all services:
```bash
docker-compose up
```

3. Wait for all services to be healthy (check logs)

4. Access the app:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Docker Compose Commands

```bash
# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild containers
docker-compose build

# Run database migrations
docker-compose exec backend alembic upgrade head

# Access backend shell
docker-compose exec backend bash

# Access frontend shell
docker-compose exec frontend sh
```

## Manual Setup

### Backend Setup

1. Create virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set environment variables:
```bash
export DATABASE_URL="postgresql://trader:password@localhost:5432/ai_trading"
export REDIS_URL="redis://localhost:6379/0"
export OPENAI_API_KEY="your_key"
```

4. Start backend:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env.local`:
```
REACT_APP_API_URL=http://localhost:8000
```

3. Start frontend:
```bash
npm start
```

## Database Setup

### PostgreSQL

1. Create database:
```bash
psql -U postgres
CREATE DATABASE ai_trading;
\c ai_trading
```

2. Tables are created automatically on first backend run

### Initialize Sample Data

```bash
cd backend
python -c "from database import init_db; asyncio.run(init_db())"
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :3000  # Frontend
lsof -i :8000  # Backend
lsof -i :5432  # PostgreSQL

# Kill process
kill -9 <PID>
```

### Database Connection Error

1. Check PostgreSQL is running:
```bash
sudo systemctl status postgresql
```

2. Verify connection string in `.env`

3. Check database exists:
```bash
psql -l
```

### Redis Connection Error

1. Check Redis is running:
```bash
redis-cli ping
```

2. Should respond with `PONG`

### Frontend Build Error

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm start
```

## Next Steps

1. Create user account at http://localhost:3000/register
2. Login with credentials
3. Create your first portfolio
4. Explore the dashboard

## Development Tips

### Backend Development
- FastAPI auto-reload enabled
- API docs at http://localhost:8000/docs
- Use Postman for API testing

### Frontend Development
- React hot reload enabled
- Redux DevTools extension recommended
- Use React Developer Tools browser extension

### Database
- Connect with: `psql -d ai_trading -U trader`
- Query manager: pgAdmin (optional)

## Production Deployment

For production:
1. Set `ENVIRONMENT=production`
2. Set `DEBUG=False`
3. Use strong `SECRET_KEY`
4. Use environment-specific `.env` files
5. Set up HTTPS/SSL
6. Configure CORS properly
7. Use production database credentials
8. Deploy with Docker or Kubernetes
