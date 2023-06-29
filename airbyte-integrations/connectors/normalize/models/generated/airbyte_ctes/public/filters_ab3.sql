{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('filters_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'update_time',
        'custom_view_id',
        'user_id',
        'visible_to',
        adapter.quote('name'),
        boolean_to_string('active_flag'),
        adapter.quote('id'),
        'temporary_flag',
        adapter.quote('type'),
        'add_time',
    ]) }} as _airbyte_filters_hashid,
    tmp.*
from {{ ref('filters_ab2') }} tmp
-- filters
where 1 = 1

