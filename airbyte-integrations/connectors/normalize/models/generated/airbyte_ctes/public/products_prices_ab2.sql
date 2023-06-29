{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('products_prices_ab1') }}
select
    _airbyte_products_hashid,
    cast({{ adapter.quote('cost') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('cost') }},
    cast(price as {{ dbt_utils.type_bigint() }}) as price,
    cast(product_id as {{ dbt_utils.type_bigint() }}) as product_id,
    cast(overhead_cost as {{ dbt_utils.type_bigint() }}) as overhead_cost,
    cast(currency as {{ dbt_utils.type_string() }}) as currency,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('products_prices_ab1') }}
-- prices at products/prices
where 1 = 1

