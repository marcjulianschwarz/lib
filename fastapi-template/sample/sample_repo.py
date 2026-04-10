import psycopg2
import psycopg2.extensions
from psycopg2.extras import RealDictCursor

from sample.sample_model import SampleDb


class SampleRepo:
    def __init__(self, conn: psycopg2.extensions.connection):
        self._conn: psycopg2.extensions.connection = conn

    def get_sample(self, sample_id: str) -> list[SampleDb] | None:
        with self._conn as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute(
                    """
                    SELECT *
                    FROM sample
                    WHERE sample_id = %s
                    ORDER BY text;
                    """,
                    (sample_id,),
                )
                results = cursor.fetchall()

                if not results:
                    return None

                return [SampleDb.model_validate(row) for row in results]
