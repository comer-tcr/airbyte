{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_leads') }}
select
    {{ json_extract_scalar('_airbyte_data', ['expected_close_date'], ['expected_close_date']) }} as expected_close_date,
    {{ json_extract_scalar('_airbyte_data', ['owner_id'], ['owner_id']) }} as owner_id,
    {{ json_extract_array('_airbyte_data', ['label_ids'], ['label_ids']) }} as label_ids,
    {{ json_extract_scalar('_airbyte_data', ['was_seen'], ['was_seen']) }} as was_seen,
    {{ json_extract_scalar('_airbyte_data', ['title'], ['title']) }} as title,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_id'], ['next_activity_id']) }} as next_activity_id,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['is_archived'], ['is_archived']) }} as is_archived,
    {{ json_extract_scalar('_airbyte_data', ['organization_id'], ['organization_id']) }} as organization_id,
    {{ json_extract_scalar('_airbyte_data', ['creator_id'], ['creator_id']) }} as creator_id,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract('table_alias', '_airbyte_data', ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['source_name'], ['source_name']) }} as source_name,
    {{ json_extract_scalar('_airbyte_data', ['person_id'], ['person_id']) }} as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_leads') }} as table_alias
-- leads
where 1 = 1

