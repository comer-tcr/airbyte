{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('product_fields_ab1') }}
select
    {{ cast_to_boolean('bulk_edit_allowed') }} as bulk_edit_allowed,
    {{ cast_to_boolean('edit_flag') }} as edit_flag,
    {{ cast_to_boolean('add_visible_flag') }} as add_visible_flag,
    cast(order_nr as {{ dbt_utils.type_bigint() }}) as order_nr,
    cast({{ adapter.quote('link') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('link') }},
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(use_field as {{ dbt_utils.type_string() }}) as use_field,
    {{ cast_to_boolean('json_column_flag') }} as json_column_flag,
    {{ cast_to_boolean('index_visible_flag') }} as index_visible_flag,
    {{ cast_to_boolean('mandatory_flag') }} as mandatory_flag,
    {{ cast_to_boolean('filtering_allowed') }} as filtering_allowed,
    cast(update_time as {{ dbt_utils.type_string() }}) as update_time,
    {{ cast_to_boolean('details_visible_flag') }} as details_visible_flag,
    {{ cast_to_boolean('sortable_flag') }} as sortable_flag,
    {{ cast_to_boolean('searchable_flag') }} as searchable_flag,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    {{ adapter.quote('options') }},
    cast(last_updated_by_user_id as {{ dbt_utils.type_bigint() }}) as last_updated_by_user_id,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(field_type as {{ dbt_utils.type_string() }}) as field_type,
    cast({{ adapter.quote('key') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('key') }},
    {{ cast_to_boolean('important_flag') }} as important_flag,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('product_fields_ab1') }}
-- product_fields
where 1 = 1

