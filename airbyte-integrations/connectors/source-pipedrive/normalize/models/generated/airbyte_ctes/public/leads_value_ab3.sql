{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('leads_value_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_leads_hashid',
        'amount',
        'currency',
    ]) }} as _airbyte_value_hashid,
    tmp.*
from {{ ref('leads_value_ab2') }} tmp
-- value at leads/value
where 1 = 1

