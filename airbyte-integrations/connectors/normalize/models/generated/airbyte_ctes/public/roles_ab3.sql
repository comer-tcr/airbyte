{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('roles_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        adapter.quote('level'),
        adapter.quote('name'),
        'description',
        boolean_to_string('active_flag'),
        'parent_role_id',
        adapter.quote('id'),
        'assignment_count',
        'sub_role_count',
    ]) }} as _airbyte_roles_hashid,
    tmp.*
from {{ ref('roles_ab2') }} tmp
-- roles
where 1 = 1

