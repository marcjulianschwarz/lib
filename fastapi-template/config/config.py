import os
from typing import ClassVar

from pydantic_settings import BaseSettings, SettingsConfigDict

# Used to manually switch environments (e.g. to testing)
_environment = os.getenv("ENVIRONMENT")
_env_files = (".env", f".env.{_environment}") if _environment else ".env"


class Settings(BaseSettings):
    model_config: ClassVar[SettingsConfigDict] = SettingsConfigDict(
        env_file=_env_files, extra="ignore"
    )

    # Database
    DB_HOST: str = "localhost"
    DB_NAME: str = "<your-db-name>"
    DB_USER: str = "postgres"
    DB_PASSWORD: str = ""
    DB_PORT: int = 5432

    # Auth
    # AUTH_SECRET: str
    AUTH_ALGORITHM: str = "HS256"
    AUTH_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    AUTH_REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    ENVIRONMENT: str = "development"

    # Health endpoint
    # HEALTH_API_KEY: str

    # URLs
    FRONTEND_URL: str = "http://localhost:3000"
    FRONTEND_INTERNAL_URL: str = "http://localhost:3000"
    BACKEND_URL: str = "http://localhost:8000"

    # S3_ACCESS_KEY: str
    # S3_SECRET_KEY: str

    # OpenAI
    # OPENAI_API_KEY: str

    # Apple APN
    # APPLE_TEAM_ID: str
    # APPLE_KEY_ID: str
    # APPLE_PRIVATE_KEY: str | None = None
    # APPLE_PRIVATE_KEY_PATH: str | None = None
    # APPLE_BUNDLE_ID: str
    # APPLE_APN_ENVIRONMENT: str = "sandbox"
    # APPLE_TEST_DEVICE_TOKEN: str = ""

    # Token refresh interval: 40 minutes (between Apple's 20-60 min requirement)
    # APPLE_TOKEN_REFRESH_INTERVAL: int = 40 * 60  # 40 minutes in seconds

    # Phoenix Tracing
    # PHOENIX_URL: str
    # PHOENIX_API_KEY: str

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"


settings = Settings()  # pyright: ignore[reportCallIssue]  # ty: ignore[missing-argument]
