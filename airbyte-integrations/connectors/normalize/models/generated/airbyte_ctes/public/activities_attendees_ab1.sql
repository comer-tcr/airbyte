{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('activities') }}
{{ unnest_cte(ref('activities'), 'activities', 'attendees') }}
select
    _airbyte_activities_hashid,
    {{ json_extract_scalar(unnested_column_value('attendees'), ['email_address'], ['email_address']) }} as email_address,
    {{ json_extract_scalar(unnested_column_value('attendees'), ['user_id'], ['user_id']) }} as user_id,
    {{ json_extract_scalar(unnested_column_value('attendees'), ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar(unnested_column_value('attendees'), ['is_organizer'], ['is_organizer']) }} as is_organizer,
    {{ json_extract_scalar(unnested_column_value('attendees'), ['status'], ['status']) }} as status,
    {{ json_extract_scalar(unnested_column_value('attendees'), ['person_id'], ['person_id']) }} as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('activities') }} as table_alias
-- attendees at activities/attendees
{{ cross_join_unnest('activities', 'attendees') }}
where 1 = 1
and attendees is not null

