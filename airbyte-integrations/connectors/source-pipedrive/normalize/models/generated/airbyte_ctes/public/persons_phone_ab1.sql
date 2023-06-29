{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('persons') }}
{{ unnest_cte(ref('persons'), 'persons', 'phone') }}
select
    _airbyte_persons_hashid,
    {{ json_extract_scalar(unnested_column_value('phone'), ['label'], ['label']) }} as {{ adapter.quote('label') }},
    {{ json_extract_scalar(unnested_column_value('phone'), ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar(unnested_column_value('phone'), ['primary'], ['primary']) }} as {{ adapter.quote('primary') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('persons') }} as table_alias
-- phone at persons/phone
{{ cross_join_unnest('persons', 'phone') }}
where 1 = 1
and phone is not null

