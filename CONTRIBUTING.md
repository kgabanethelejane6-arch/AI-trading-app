# Contributing to AI Trading App

Thank you for your interest in contributing! Here are guidelines to help you get started.

## Development Setup

### Prerequisites
- Git
- Docker & Docker Compose
- Node.js 18+
- Python 3.10+

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/kgabanethelejane6-arch/AI-trading-app.git
cd AI-trading-app
```

2. Start with Docker:
```bash
docker-compose up
```

3. Access the app:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## Code Style

### Frontend (TypeScript/React)
- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable names
- Add JSDoc comments for complex functions

### Backend (Python)
- Follow PEP 8 style guide
- Use type hints
- Add docstrings to functions
- Write unit tests for new features

## Commit Messages

- Use clear, descriptive commit messages
- Format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly
4. Push to your fork
5. Create a Pull Request with a clear description
6. Ensure all checks pass
7. Request review from maintainers

## Testing

### Backend
```bash
cd backend
pytest
```

### Frontend
```bash
cd frontend
npm test
```

## Reporting Issues

When reporting issues, include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/logs if applicable

## Feature Requests

For feature requests, describe:
- Use case
- Expected behavior
- Possible implementation approach

## License

Contributions are licensed under MIT.
