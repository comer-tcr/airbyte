{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('organizations') }}
select
    _airbyte_organizations_hashid,
    {{ json_extract_scalar('picture_id', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('picture_id', ['added_by_user_id'], ['added_by_user_id']) }} as added_by_user_id,
    {{ json_extract_scalar('picture_id', ['item_id'], ['item_id']) }} as item_id,
    {{ json_extract_scalar('picture_id', ['item_type'], ['item_type']) }} as item_type,
    {{ json_extract_scalar('picture_id', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('picture_id', ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar('picture_id', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract('table_alias', 'picture_id', ['pictures'], ['pictures']) }} as pictures,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations') }} as table_alias
-- picture_id at organizations/picture_id
where 1 = 1
and picture_id is not null

