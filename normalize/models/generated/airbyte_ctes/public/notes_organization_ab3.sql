{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('notes_organization_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_notes_hashid',
        adapter.quote('name'),
    ]) }} as _airbyte_organization_hashid,
    tmp.*
from {{ ref('notes_organization_ab2') }} tmp
-- organization at notes/organization
where 1 = 1

