{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('persons') }}
{{ unnest_cte(ref('persons'), 'persons', 'email') }}
select
    _airbyte_persons_hashid,
    {{ json_extract_scalar(unnested_column_value('email'), ['label'], ['label']) }} as {{ adapter.quote('label') }},
    {{ json_extract_scalar(unnested_column_value('email'), ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar(unnested_column_value('email'), ['primary'], ['primary']) }} as {{ adapter.quote('primary') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('persons') }} as table_alias
-- email at persons/email
{{ cross_join_unnest('persons', 'email') }}
where 1 = 1
and email is not null

