{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('organizations_owner_id_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_organizations_hashid',
        adapter.quote('name'),
        'has_pic',
        boolean_to_string('active_flag'),
        adapter.quote('id'),
        adapter.quote('value'),
        'email',
        'pic_hash',
    ]) }} as _airbyte_owner_id_hashid,
    tmp.*
from {{ ref('organizations_owner_id_ab2') }} tmp
-- owner_id at organizations/owner_id
where 1 = 1

