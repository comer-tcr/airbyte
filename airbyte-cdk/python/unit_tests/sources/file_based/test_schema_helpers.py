#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import Any, Mapping

import pytest
from airbyte_cdk.sources.file_based.schema_helpers import conforms_to_schema

COMPLETE_CONFORMING_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}


NONCONFORMING_EXTRA_COLUMN_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
    "column_x": "extra"
}

CONFORMING_WITH_MISSING_COLUMN_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
}

CONFORMING_WITH_NARROWER_TYPE_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": True,
    "number_field": True,
    "string_field": True,
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}

NONCONFORMING_WIDER_TYPE_RECORD = {
    "null_field": "not None",
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}

NONCONFORMING_NON_OBJECT_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": "not an object",
    "mixed_type_field": 1.5,
}

NONCONFORMING_NON_ARRAY_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": "not an array",
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}

CONFORMING_MIXED_TYPE_NARROWER_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": None,
}

NONCONFORMING_MIXED_TYPE_WIDER_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": "too wide",
}

CONFORMING_MIXED_TYPE_WITHIN_TYPE_RANGE_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": "val1",
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1,
}

NONCONFORMING_INVALID_ARRAY_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": ["this should not be an array"],
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}

NONCONFORMING_INVALID_OBJECT_RECORD = {
    "null_field": None,
    "boolean_field": True,
    "integer_field": 1,
    "number_field": 1.5,
    "string_field": {"this": "should not be an object"},
    "array_field": ["val1", "val2"],
    "object_field": {"col": "val"},
    "mixed_type_field": 1.5,
}


SCHEMA = {
    "type": "object",
    "properties": {
        "null_field": {
            "type": "null"
        },
        "boolean_field": {
            "type": "boolean"
        },
        "integer_field": {
            "type": "integer"
        },
        "number_field": {
            "type": "number"
        },
        "string_field": {
            "type": "string"
        },
        "array_field": {
            "type": "array"
        },
        "object_field": {
            "type": "object"
        },
        "mixed_type_field": {
            "type": ["boolean", "number"]
        }
    }
}


@pytest.mark.parametrize(
    "record,schema,expected_result",
    [
        pytest.param(COMPLETE_CONFORMING_RECORD, SCHEMA, True, id="record-conforms"),
        pytest.param(NONCONFORMING_EXTRA_COLUMN_RECORD, SCHEMA, False, id="nonconforming-extra-column"),
        pytest.param(CONFORMING_WITH_MISSING_COLUMN_RECORD, SCHEMA, True, id="record-conforms-with-missing-column"),
        pytest.param(CONFORMING_WITH_NARROWER_TYPE_RECORD, SCHEMA, True, id="record-conforms-with-narrower-type"),
        pytest.param(NONCONFORMING_WIDER_TYPE_RECORD, SCHEMA, False, id="nonconforming-wider-type"),
        pytest.param(NONCONFORMING_NON_OBJECT_RECORD, SCHEMA, False, id="nonconforming-string-is-not-an-object"),
        pytest.param(NONCONFORMING_NON_ARRAY_RECORD, SCHEMA, False, id="nonconforming-string-is-not-an-array"),
        pytest.param(CONFORMING_MIXED_TYPE_NARROWER_RECORD, SCHEMA, True, id="record-conforms-with-mixed-type-narrower"),
        pytest.param(NONCONFORMING_MIXED_TYPE_WIDER_RECORD, SCHEMA, False, id="nonconforming-mixed-type-wider"),
        pytest.param(CONFORMING_MIXED_TYPE_WITHIN_TYPE_RANGE_RECORD, SCHEMA, True, id="record-conforms-with-mixed-type-within-range"),
        pytest.param(NONCONFORMING_INVALID_ARRAY_RECORD, SCHEMA, False, id="nonconforming-array-is-not-a-string"),
        pytest.param(NONCONFORMING_INVALID_OBJECT_RECORD, SCHEMA, False, id="nonconforming-object-is-not-a-string"),
    ]
)
def test_conforms_to_schema(
    record: Mapping[str, Any],
    schema: Mapping[str, Any],
    expected_result: bool
):
    assert conforms_to_schema(record, schema) == expected_result
