#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import Any, Dict, List, Mapping, Optional, Union

from airbyte_cdk.models import ConfiguredAirbyteCatalog
from pydantic import BaseModel, root_validator

PrimaryKeyType = Optional[Union[str, List[str], List[List[str]]]]


class FileBasedStreamConfig(BaseModel):
    name: str
    file_type: str
    validation_policy: Union[str, Any]
    globs: Optional[List[str]]
    catalog_schema: Optional[ConfiguredAirbyteCatalog]
    input_schema: Optional[Mapping[str, Any]]
    primary_key: PrimaryKeyType
    max_history_size: Optional[int]
    days_to_sync_if_history_is_full: Optional[int]
    validation_policies: Dict[str, Any]

    @root_validator
    def set_validation_policy(cls, values):
        validation_policy_key = values.get("validation_policy")
        validation_policies = values.get("validation_policies")

        if validation_policy_key not in validation_policies:
            raise ValueError(f"validation_policy must be one of {list(validation_policies.keys())}")

        values["validation_policy"] = validation_policies[validation_policy_key]

        return values
