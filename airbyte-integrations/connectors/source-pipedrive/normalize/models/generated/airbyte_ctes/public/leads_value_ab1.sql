{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('leads') }}
select
    _airbyte_leads_hashid,
    {{ json_extract_scalar(adapter.quote('value'), ['amount'], ['amount']) }} as amount,
    {{ json_extract_scalar(adapter.quote('value'), ['currency'], ['currency']) }} as currency,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('leads') }} as table_alias
-- value at leads/value
where 1 = 1
and {{ adapter.quote('value') }} is not null

