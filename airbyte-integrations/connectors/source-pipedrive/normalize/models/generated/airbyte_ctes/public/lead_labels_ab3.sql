{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('lead_labels_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'update_time',
        'color',
        adapter.quote('name'),
        adapter.quote('id'),
        'add_time',
    ]) }} as _airbyte_lead_labels_hashid,
    tmp.*
from {{ ref('lead_labels_ab2') }} tmp
-- lead_labels
where 1 = 1

