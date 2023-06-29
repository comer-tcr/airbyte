{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('notes') }}
select
    _airbyte_notes_hashid,
    {{ json_extract_scalar(adapter.quote('user'), ['icon_url'], ['icon_url']) }} as icon_url,
    {{ json_extract_scalar(adapter.quote('user'), ['is_you'], ['is_you']) }} as is_you,
    {{ json_extract_scalar(adapter.quote('user'), ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar(adapter.quote('user'), ['email'], ['email']) }} as email,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('notes') }} as table_alias
-- user at notes/user
where 1 = 1
and {{ adapter.quote('user') }} is not null

