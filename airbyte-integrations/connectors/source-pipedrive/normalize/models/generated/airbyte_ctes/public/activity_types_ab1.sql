{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_activity_types') }}
select
    {{ json_extract_scalar('_airbyte_data', ['icon_key'], ['icon_key']) }} as icon_key,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['is_custom_flag'], ['is_custom_flag']) }} as is_custom_flag,
    {{ json_extract_scalar('_airbyte_data', ['color'], ['color']) }} as color,
    {{ json_extract_scalar('_airbyte_data', ['key_string'], ['key_string']) }} as key_string,
    {{ json_extract_scalar('_airbyte_data', ['order_nr'], ['order_nr']) }} as order_nr,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_activity_types') }} as table_alias
-- activity_types
where 1 = 1

