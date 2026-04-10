from collections.abc import Generator
from contextlib import contextmanager
from pathlib import Path
from typing import cast

import psycopg2
import psycopg2.extensions
import psycopg2.pool

from config.config import settings
from logging_config import create_logger

logger = create_logger(__name__)


_pool: psycopg2.pool.ThreadedConnectionPool | None = None


def get_pool() -> psycopg2.pool.ThreadedConnectionPool:
    global _pool
    if _pool is None:
        logger.info("Creating connection pool")
        _pool = psycopg2.pool.ThreadedConnectionPool(
            minconn=2,
            maxconn=10,
            host=settings.DB_HOST,
            database=settings.DB_NAME,
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            port=settings.DB_PORT,
        )
    return _pool


def get_db() -> Generator[psycopg2.extensions.connection, None, None]:
    """FastAPI dependency that yields a connection from the pool."""
    pool = get_pool()
    conn: psycopg2.extensions.connection = cast(
        psycopg2.extensions.connection, pool.getconn()
    )
    try:
        yield conn
    finally:
        pool.putconn(conn)


class DbService:
    """Service for handling database connections. Current database: postgres"""

    def __init__(self):
        logger.info("Initializing database")
        self.run_migrations()

    @contextmanager
    def get_connection(self):
        pool = get_pool()
        conn: psycopg2.extensions.connection = cast(
            psycopg2.extensions.connection, pool.getconn()
        )
        try:
            yield conn
        finally:
            pool.putconn(conn)

    def init_migrations_table(self):
        """Create migrations tracking table if it doesn't exist"""
        logger.info("Creating migration table")
        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    """
                    CREATE TABLE IF NOT EXISTS migrations (
                        id SERIAL PRIMARY KEY,
                        migration_name VARCHAR(255) UNIQUE NOT NULL,
                        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                    """
                )
                conn.commit()

    def run_migrations(self):
        """Run all pending migrations from the migrations directory"""
        logger.info("Creating Migrations Table")
        self.init_migrations_table()

        migrations_dir = Path(__file__).parent.parent / "migrations"
        migration_files = sorted(migrations_dir.glob("*.sql"))
        logger.info(f"Found {len(migration_files)} migration files.")

        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "SELECT migration_name FROM migrations ORDER BY migration_name"
                )
                applied = {row[0] for row in cursor.fetchall()}

                for migration_file in migration_files:
                    if migration_file.name not in applied:
                        logger.info(f"Running migration: {migration_file.name}")

                        sql = migration_file.read_text()
                        cursor.execute(sql)

                        cursor.execute(
                            "INSERT INTO migrations (migration_name) VALUES (%s)",
                            (migration_file.name,),
                        )
                        conn.commit()
                        logger.info(f"Migration {migration_file.name} completed")
                    else:
                        logger.info(
                            f"Skipping already applied migration {migration_file.name}."
                        )

    def drop_all(self):
        """Drop all tables and re-run migrations. For use in tests only."""
        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    """
                    DROP TABLE IF EXISTS
                        <your-table>
                    CASCADE;
                    """
                )
                conn.commit()
        self.__init__()
