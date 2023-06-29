{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('currencies_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'symbol',
        'decimal_points',
        'code',
        boolean_to_string('is_custom_flag'),
        adapter.quote('name'),
        boolean_to_string('active_flag'),
        adapter.quote('id'),
    ]) }} as _airbyte_currencies_hashid,
    tmp.*
from {{ ref('currencies_ab2') }} tmp
-- currencies
where 1 = 1

