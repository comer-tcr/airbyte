{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('stages_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'update_time',
        boolean_to_string('pipeline_deal_probability'),
        'order_nr',
        adapter.quote('name'),
        'pipeline_id',
        'deal_probability',
        boolean_to_string('active_flag'),
        boolean_to_string('rotten_flag'),
        adapter.quote('id'),
        'add_time',
        'rotten_days',
        'pipeline_name',
    ]) }} as _airbyte_stages_hashid,
    tmp.*
from {{ ref('stages_ab2') }} tmp
-- stages
where 1 = 1

