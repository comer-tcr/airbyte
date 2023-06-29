{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('permission_sets_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'app',
        adapter.quote('name'),
        adapter.quote('id'),
        adapter.quote('type'),
        'assignment_count',
    ]) }} as _airbyte_permission_sets_hashid,
    tmp.*
from {{ ref('permission_sets_ab2') }} tmp
-- permission_sets
where 1 = 1

