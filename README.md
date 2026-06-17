# AI Trading App

An intelligent trading application powered by AI that provides market analysis, trading recommendations, and portfolio management.

## Features

- 📊 Real-time market data analysis
- 🤖 AI-powered trading recommendations
- 💼 Portfolio management and tracking
- 📈 Advanced charting and visualization
- ⚠️ Risk assessment and alerts
- 🔐 Secure authentication
- 📱 Responsive dashboard

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Tailwind CSS for styling
- Redux Toolkit for state management
- React Query for data fetching
- Chart.js for visualizations

### Backend
- Python 3.10+ with FastAPI
- PostgreSQL database
- LangChain for AI integration
- OpenAI/Claude APIs
- Celery for async tasks

## Project Structure

```
ai-trading-app/
├── frontend/                 # React application
├── backend/                  # FastAPI application
├── docker-compose.yml        # Docker configuration
└── docs/                     # Documentation
```

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+
- Python 3.10+

### Development Setup

```bash
# Clone the repository
git clone https://github.com/kgabanethelejane6-arch/ai-trading-app.git
cd ai-trading-app

# Start with Docker
docker-compose up

# Or start manually

# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend (in new terminal)
cd frontend
npm install
npm start
```

## Environment Variables

See `.env.example` file in root directory.

## API Documentation

Once the backend is running, visit `http://localhost:8000/docs` for interactive API documentation.

## Contributing

See CONTRIBUTING.md for guidelines.

## License

MIT
