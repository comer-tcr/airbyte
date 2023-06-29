{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('products_ab1') }}
select
    cast(code as {{ dbt_utils.type_string() }}) as code,
    cast(owner_name as {{ dbt_utils.type_string() }}) as owner_name,
    cast(files_count as {{ dbt_utils.type_bigint() }}) as files_count,
    cast(owner_id as {{ dbt_utils.type_bigint() }}) as owner_id,
    cast(first_char as {{ dbt_utils.type_string() }}) as first_char,
    {{ cast_to_boolean('selectable') }} as selectable,
    cast(description as {{ dbt_utils.type_string() }}) as description,
    cast(tax as {{ dbt_utils.type_bigint() }}) as tax,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(unit as {{ dbt_utils.type_string() }}) as unit,
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    cast(visible_to as {{ dbt_utils.type_string() }}) as visible_to,
    cast(followers_count as {{ dbt_utils.type_bigint() }}) as followers_count,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    prices,
    cast(category as {{ dbt_utils.type_string() }}) as category,
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('products_ab1') }}
-- products
where 1 = 1

