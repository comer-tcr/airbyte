{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('activities') }}
{{ unnest_cte(ref('activities'), 'activities', 'participants') }}
select
    _airbyte_activities_hashid,
    {{ json_extract_scalar(unnested_column_value('participants'), ['primary_flag'], ['primary_flag']) }} as primary_flag,
    {{ json_extract_scalar(unnested_column_value('participants'), ['person_id'], ['person_id']) }} as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('activities') }} as table_alias
-- participants at activities/participants
{{ cross_join_unnest('activities', 'participants') }}
where 1 = 1
and participants is not null

