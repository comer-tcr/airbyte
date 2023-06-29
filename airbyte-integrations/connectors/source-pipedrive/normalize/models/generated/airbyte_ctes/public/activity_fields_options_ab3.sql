{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('activity_fields_options_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_activity_fields_hashid',
        adapter.quote('id'),
        adapter.quote('label'),
    ]) }} as _airbyte_options_hashid,
    tmp.*
from {{ ref('activity_fields_options_ab2') }} tmp
-- options at activity_fields/options
where 1 = 1

