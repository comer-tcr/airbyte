{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('organization_fields_options_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_organization_fields_hashid',
        adapter.quote('id'),
        adapter.quote('label'),
    ]) }} as _airbyte_options_hashid,
    tmp.*
from {{ ref('organization_fields_options_ab2') }} tmp
-- options at organization_fields/options
where 1 = 1

