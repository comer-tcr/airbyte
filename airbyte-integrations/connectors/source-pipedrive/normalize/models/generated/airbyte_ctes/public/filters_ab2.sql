{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('filters_ab1') }}
select
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    cast(custom_view_id as {{ dbt_utils.type_bigint() }}) as custom_view_id,
    cast(user_id as {{ dbt_utils.type_bigint() }}) as user_id,
    cast(visible_to as {{ dbt_utils.type_string() }}) as visible_to,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(temporary_flag as {{ dbt_utils.type_string() }}) as temporary_flag,
    cast({{ adapter.quote('type') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('type') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('filters_ab1') }}
-- filters
where 1 = 1

