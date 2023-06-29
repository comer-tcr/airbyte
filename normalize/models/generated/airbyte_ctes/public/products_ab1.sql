{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_products') }}
select
    {{ json_extract_scalar('_airbyte_data', ['code'], ['code']) }} as code,
    {{ json_extract_scalar('_airbyte_data', ['owner_name'], ['owner_name']) }} as owner_name,
    {{ json_extract_scalar('_airbyte_data', ['files_count'], ['files_count']) }} as files_count,
    {{ json_extract_scalar('_airbyte_data', ['owner_id'], ['owner_id']) }} as owner_id,
    {{ json_extract_scalar('_airbyte_data', ['first_char'], ['first_char']) }} as first_char,
    {{ json_extract_scalar('_airbyte_data', ['selectable'], ['selectable']) }} as selectable,
    {{ json_extract_scalar('_airbyte_data', ['description'], ['description']) }} as description,
    {{ json_extract_scalar('_airbyte_data', ['tax'], ['tax']) }} as tax,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['unit'], ['unit']) }} as unit,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['visible_to'], ['visible_to']) }} as visible_to,
    {{ json_extract_scalar('_airbyte_data', ['followers_count'], ['followers_count']) }} as followers_count,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_array('_airbyte_data', ['prices'], ['prices']) }} as prices,
    {{ json_extract_scalar('_airbyte_data', ['category'], ['category']) }} as category,
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_products') }} as table_alias
-- products
where 1 = 1

