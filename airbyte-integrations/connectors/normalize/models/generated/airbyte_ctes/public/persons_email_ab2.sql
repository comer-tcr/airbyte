{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('persons_email_ab1') }}
select
    _airbyte_persons_hashid,
    cast({{ adapter.quote('label') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('label') }},
    cast({{ adapter.quote('value') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('value') }},
    {{ cast_to_boolean(adapter.quote('primary')) }} as {{ adapter.quote('primary') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('persons_email_ab1') }}
-- email at persons/email
where 1 = 1

