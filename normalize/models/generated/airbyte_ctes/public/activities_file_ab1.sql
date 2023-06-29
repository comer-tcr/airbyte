{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('activities') }}
select
    _airbyte_activities_hashid,
    {{ json_extract_scalar(adapter.quote('file'), ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar(adapter.quote('file'), ['clean_name'], ['clean_name']) }} as clean_name,
    {{ json_extract_scalar(adapter.quote('file'), ['url'], ['url']) }} as url,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('activities') }} as table_alias
-- file at activities/file
where 1 = 1
and {{ adapter.quote('file') }} is not null

