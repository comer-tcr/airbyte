{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('notes_person_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_notes_hashid',
        adapter.quote('name'),
    ]) }} as _airbyte_person_hashid,
    tmp.*
from {{ ref('notes_person_ab2') }} tmp
-- person at notes/person
where 1 = 1

