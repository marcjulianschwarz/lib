from typing import Annotated

import psycopg2
import psycopg2.extensions
from fastapi import Depends

from db.db_service import get_db
from logging_config import create_logger
from sample.sample_model import Sample
from sample.sample_repo import SampleRepo

logger = create_logger(__name__)


class SampleService:
    def __init__(self, repo: SampleRepo):
        self.repo: SampleRepo = repo

    def get_all_samples(self, user_id: str) -> list[Sample]:
        tags_db = self.repo.get_sample(user_id)
        if not tags_db:
            return []

        return [
            Sample(
                id=tag.id,
                text=tag.text,
            )
            for tag in tags_db
        ]


def get_sample_service(
    conn: Annotated[psycopg2.extensions.connection, Depends(get_db)],
) -> SampleService:
    repo = SampleRepo(conn=conn)
    return SampleService(repo=repo)
