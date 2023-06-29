{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('products_prices_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_products_hashid',
        adapter.quote('cost'),
        'price',
        'product_id',
        'overhead_cost',
        'currency',
        adapter.quote('id'),
    ]) }} as _airbyte_prices_hashid,
    tmp.*
from {{ ref('products_prices_ab2') }} tmp
-- prices at products/prices
where 1 = 1

