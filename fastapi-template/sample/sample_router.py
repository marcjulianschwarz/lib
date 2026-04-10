from typing import Annotated

from fastapi import APIRouter, Depends

from sample.sample_model import Sample
from sample.sample_service import SampleService, get_sample_service

router = APIRouter(prefix="/sample", tags=["Sample"])


@router.get("")
def get_all_samples(
    sample_service: Annotated[SampleService, Depends(get_sample_service)],
) -> list[Sample]:
    return sample_service.get_all_samples("id")
