{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('organizations_picture_id_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_organizations_hashid',
        'update_time',
        'added_by_user_id',
        'item_id',
        'item_type',
        boolean_to_string('active_flag'),
        adapter.quote('value'),
        'add_time',
        object_to_string('pictures'),
    ]) }} as _airbyte_picture_id_hashid,
    tmp.*
from {{ ref('organizations_picture_id_ab2') }} tmp
-- picture_id at organizations/picture_id
where 1 = 1

