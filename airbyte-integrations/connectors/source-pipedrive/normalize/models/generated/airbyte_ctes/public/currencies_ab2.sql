{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('currencies_ab1') }}
select
    cast(symbol as {{ dbt_utils.type_string() }}) as symbol,
    cast(decimal_points as {{ dbt_utils.type_bigint() }}) as decimal_points,
    cast(code as {{ dbt_utils.type_string() }}) as code,
    {{ cast_to_boolean('is_custom_flag') }} as is_custom_flag,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('currencies_ab1') }}
-- currencies
where 1 = 1

