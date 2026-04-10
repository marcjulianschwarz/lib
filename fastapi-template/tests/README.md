# Tests

This directory contains unit, integration, and end-to-end tests for the backend API.

## Quick Start

### 1. Start Test Database

```bash
# Start PostgreSQL test database in Docker
docker compose -f docker-compose.test.yml up -d

# Wait for database to be ready
docker compose -f docker-compose.test.yml ps
```

### 2. Run Tests

```bash
# Run all tests
uv run pytest

# Run with coverage
uv run pytest --cov

# Run only unit tests
uv run pytest tests/auth/unit/ tests/content/unit/

# Run only e2e tests
uv run pytest tests/auth/e2e/ tests/content/e2e/ -m e2e

# Run tests in parallel (faster)
uv run pytest -n auto

# Run specific domain
uv run pytest tests/auth/

# Run specific test file
uv run pytest tests/auth/unit/test_auth_service.py

# Run specific test
uv run pytest tests/auth/unit/test_auth_service.py::TestPasswordHashing::test_password_hash_verification_succeeds
```

### 3. Stop Test Database

```bash
docker compose -f docker-compose.test.yml down
```

## Test Structure

```
tests/
├── conftest.py              # Shared fixtures (db, conn, client, auth_service, user_service)
├── factories.py             # Test data factories
├── types.py                 # Type definitions for tests
├── auth/                    # Auth domain tests
│   ├── e2e/
│   │   └── test_auth_api.py
│   └── unit/
│       └── test_auth_service.py
└── content/                 # Content domain tests
    ├── e2e/
    │   └── test_content_api.py
    └── unit/
        └── test_content_service.py
```

## Fixtures

### Database Fixtures

- `test_db` (session scope): Creates test database with migrations
- `db` (function scope): Provides clean database for each test

### Client Fixtures

- `client`: FastAPI TestClient
- `authenticated_client`: TestClient with auth token + test user

### User Fixtures

- `test_user`: Creates test user with credentials
