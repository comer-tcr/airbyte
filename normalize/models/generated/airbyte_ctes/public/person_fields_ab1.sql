{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_person_fields') }}
select
    {{ json_extract_scalar('_airbyte_data', ['bulk_edit_allowed'], ['bulk_edit_allowed']) }} as bulk_edit_allowed,
    {{ json_extract_scalar('_airbyte_data', ['edit_flag'], ['edit_flag']) }} as edit_flag,
    {{ json_extract_scalar('_airbyte_data', ['add_visible_flag'], ['add_visible_flag']) }} as add_visible_flag,
    {{ json_extract_scalar('_airbyte_data', ['order_nr'], ['order_nr']) }} as order_nr,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['index_visible_flag'], ['index_visible_flag']) }} as index_visible_flag,
    {{ json_extract_scalar('_airbyte_data', ['mandatory_flag'], ['mandatory_flag']) }} as mandatory_flag,
    {{ json_extract_scalar('_airbyte_data', ['filtering_allowed'], ['filtering_allowed']) }} as filtering_allowed,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['details_visible_flag'], ['details_visible_flag']) }} as details_visible_flag,
    {{ json_extract_scalar('_airbyte_data', ['sortable_flag'], ['sortable_flag']) }} as sortable_flag,
    {{ json_extract_scalar('_airbyte_data', ['searchable_flag'], ['searchable_flag']) }} as searchable_flag,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_array('_airbyte_data', ['options'], ['options']) }} as {{ adapter.quote('options') }},
    {{ json_extract_scalar('_airbyte_data', ['last_updated_by_user_id'], ['last_updated_by_user_id']) }} as last_updated_by_user_id,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['field_type'], ['field_type']) }} as field_type,
    {{ json_extract_scalar('_airbyte_data', ['key'], ['key']) }} as {{ adapter.quote('key') }},
    {{ json_extract_scalar('_airbyte_data', ['important_flag'], ['important_flag']) }} as important_flag,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_person_fields') }} as table_alias
-- person_fields
where 1 = 1

