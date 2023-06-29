{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('product_fields') }}
{{ unnest_cte(ref('product_fields'), 'product_fields', adapter.quote('options')) }}
select
    _airbyte_product_fields_hashid,
    {{ json_extract_scalar(unnested_column_value(adapter.quote('options')), ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar(unnested_column_value(adapter.quote('options')), ['label'], ['label']) }} as {{ adapter.quote('label') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('product_fields') }} as table_alias
-- options at product_fields/options
{{ cross_join_unnest('product_fields', adapter.quote('options')) }}
where 1 = 1
and {{ adapter.quote('options') }} is not null

