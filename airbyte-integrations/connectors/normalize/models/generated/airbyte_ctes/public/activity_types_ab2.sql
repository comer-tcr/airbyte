{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('activity_types_ab1') }}
select
    cast(icon_key as {{ dbt_utils.type_string() }}) as icon_key,
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    {{ cast_to_boolean('is_custom_flag') }} as is_custom_flag,
    cast(color as {{ dbt_utils.type_string() }}) as color,
    cast(key_string as {{ dbt_utils.type_string() }}) as key_string,
    cast(order_nr as {{ dbt_utils.type_bigint() }}) as order_nr,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('activity_types_ab1') }}
-- activity_types
where 1 = 1

