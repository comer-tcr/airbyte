{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_roles') }}
select
    {{ json_extract_scalar('_airbyte_data', ['level'], ['level']) }} as {{ adapter.quote('level') }},
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['description'], ['description']) }} as description,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['parent_role_id'], ['parent_role_id']) }} as parent_role_id,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['assignment_count'], ['assignment_count']) }} as assignment_count,
    {{ json_extract_scalar('_airbyte_data', ['sub_role_count'], ['sub_role_count']) }} as sub_role_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_roles') }} as table_alias
-- roles
where 1 = 1

