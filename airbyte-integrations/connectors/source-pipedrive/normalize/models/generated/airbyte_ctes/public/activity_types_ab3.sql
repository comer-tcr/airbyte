{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('activity_types_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'icon_key',
        'update_time',
        boolean_to_string('is_custom_flag'),
        'color',
        'key_string',
        'order_nr',
        adapter.quote('name'),
        boolean_to_string('active_flag'),
        adapter.quote('id'),
        'add_time',
    ]) }} as _airbyte_activity_types_hashid,
    tmp.*
from {{ ref('activity_types_ab2') }} tmp
-- activity_types
where 1 = 1

