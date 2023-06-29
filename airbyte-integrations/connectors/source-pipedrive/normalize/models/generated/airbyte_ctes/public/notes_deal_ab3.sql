{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('notes_deal_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_notes_hashid',
        'title',
    ]) }} as _airbyte_deal_hashid,
    tmp.*
from {{ ref('notes_deal_ab2') }} tmp
-- deal at notes/deal
where 1 = 1

