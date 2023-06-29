{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('activities_attendees_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_activities_hashid',
        'email_address',
        'user_id',
        adapter.quote('name'),
        'is_organizer',
        'status',
        'person_id',
    ]) }} as _airbyte_attendees_hashid,
    tmp.*
from {{ ref('activities_attendees_ab2') }} tmp
-- attendees at activities/attendees
where 1 = 1

