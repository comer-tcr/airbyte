{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('organizations') }}
select
    _airbyte_organizations_hashid,
    {{ json_extract_scalar('owner_id', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('owner_id', ['has_pic'], ['has_pic']) }} as has_pic,
    {{ json_extract_scalar('owner_id', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('owner_id', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('owner_id', ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar('owner_id', ['email'], ['email']) }} as email,
    {{ json_extract_scalar('owner_id', ['pic_hash'], ['pic_hash']) }} as pic_hash,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations') }} as table_alias
-- owner_id at organizations/owner_id
where 1 = 1
and owner_id is not null

