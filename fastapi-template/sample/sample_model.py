from typing import ClassVar

from pydantic import BaseModel, ConfigDict, Field
from pydantic.v1.utils import to_lower_camel


class Sample(BaseModel):
    id: str
    text: str

    model_config: ClassVar[ConfigDict] = ConfigDict(
        alias_generator=to_lower_camel, populate_by_name=True, from_attributes=True
    )


class SampleDb(Sample):
    user_id: str


class SampleCreate(BaseModel):
    text: str = Field(..., min_length=1, max_length=255)

    model_config: ClassVar[ConfigDict] = ConfigDict(
        alias_generator=to_lower_camel, populate_by_name=True
    )


class SampleUpdate(BaseModel):
    text: str | None = Field(None, min_length=1, max_length=255)

    model_config: ClassVar[ConfigDict] = ConfigDict(
        alias_generator=to_lower_camel, populate_by_name=True
    )
