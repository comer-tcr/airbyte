{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('pipelines_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'update_time',
        'url_title',
        'order_nr',
        adapter.quote('name'),
        boolean_to_string('active'),
        boolean_to_string('deal_probability'),
        adapter.quote('id'),
        'add_time',
        boolean_to_string('selected'),
    ]) }} as _airbyte_pipelines_hashid,
    tmp.*
from {{ ref('pipelines_ab2') }} tmp
-- pipelines
where 1 = 1

