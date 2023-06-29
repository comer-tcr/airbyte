{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('persons_phone_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_persons_hashid',
        adapter.quote('label'),
        adapter.quote('value'),
        boolean_to_string(adapter.quote('primary')),
    ]) }} as _airbyte_phone_hashid,
    tmp.*
from {{ ref('persons_phone_ab2') }} tmp
-- phone at persons/phone
where 1 = 1

