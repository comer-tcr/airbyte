{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('products') }}
{{ unnest_cte(ref('products'), 'products', 'prices') }}
select
    _airbyte_products_hashid,
    {{ json_extract_scalar(unnested_column_value('prices'), ['cost'], ['cost']) }} as {{ adapter.quote('cost') }},
    {{ json_extract_scalar(unnested_column_value('prices'), ['price'], ['price']) }} as price,
    {{ json_extract_scalar(unnested_column_value('prices'), ['product_id'], ['product_id']) }} as product_id,
    {{ json_extract_scalar(unnested_column_value('prices'), ['overhead_cost'], ['overhead_cost']) }} as overhead_cost,
    {{ json_extract_scalar(unnested_column_value('prices'), ['currency'], ['currency']) }} as currency,
    {{ json_extract_scalar(unnested_column_value('prices'), ['id'], ['id']) }} as {{ adapter.quote('id') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('products') }} as table_alias
-- prices at products/prices
{{ cross_join_unnest('products', 'prices') }}
where 1 = 1
and prices is not null

