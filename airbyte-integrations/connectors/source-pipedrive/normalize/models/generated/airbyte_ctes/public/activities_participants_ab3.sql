{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('activities_participants_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_activities_hashid',
        boolean_to_string('primary_flag'),
        'person_id',
    ]) }} as _airbyte_participants_hashid,
    tmp.*
from {{ ref('activities_participants_ab2') }} tmp
-- participants at activities/participants
where 1 = 1

