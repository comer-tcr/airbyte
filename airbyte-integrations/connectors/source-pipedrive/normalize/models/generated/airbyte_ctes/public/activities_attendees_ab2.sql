{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('activities_attendees_ab1') }}
select
    _airbyte_activities_hashid,
    cast(email_address as {{ dbt_utils.type_string() }}) as email_address,
    cast(user_id as {{ dbt_utils.type_bigint() }}) as user_id,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(is_organizer as {{ dbt_utils.type_bigint() }}) as is_organizer,
    cast(status as {{ dbt_utils.type_string() }}) as status,
    cast(person_id as {{ dbt_utils.type_bigint() }}) as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('activities_attendees_ab1') }}
-- attendees at activities/attendees
where 1 = 1

