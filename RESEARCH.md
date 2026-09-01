# Research

## Nutrition Data

## Price Data

## Stack

### Frontend

### Backend
* **Framework:** FastAPI (Python) — handles HTTP endpoints, request validation, and auto generated docs at `/docs`.
* **Server:** Uvicorn — runs the FastAPI app and listens for incoming requests.
* **Database:** PostgreSQL — persistent storage for data.
* **ORM:** SQLAlchemy — maps Python classes to Postgres tables, used to query/insert/update data without raw SQL.
* **Migrations:** Alembic — tracks and applies versioned changes to the database schema over time.
* **Validation/schemas:** Pydantic — defines and validates API request/response shapes, separate from the SQLAlchemy DB models.
* **Dependency management:** pyproject.toml, managed with uv.
* **Local dev database:** Postgres run via Docker container during development; full app stack not containerized yet, revisit once closer to deployment.
