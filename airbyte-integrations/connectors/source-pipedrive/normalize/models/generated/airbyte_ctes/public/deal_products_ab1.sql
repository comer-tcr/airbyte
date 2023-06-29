{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_deal_products') }}
select
    {{ json_extract_scalar('_airbyte_data', ['sum_formatted'], ['sum_formatted']) }} as sum_formatted,
    {{ json_extract_scalar('_airbyte_data', ['comments'], ['comments']) }} as {{ adapter.quote('comments') }},
    {{ json_extract_scalar('_airbyte_data', ['quantity'], ['quantity']) }} as quantity,
    {{ json_extract_scalar('_airbyte_data', ['sum_no_discount'], ['sum_no_discount']) }} as sum_no_discount,
    {{ json_extract_scalar('_airbyte_data', ['item_price'], ['item_price']) }} as item_price,
    {{ json_extract_scalar('_airbyte_data', ['order_nr'], ['order_nr']) }} as order_nr,
    {{ json_extract_scalar('_airbyte_data', ['sum'], ['sum']) }} as {{ adapter.quote('sum') }},
    {{ json_extract_scalar('_airbyte_data', ['tax'], ['tax']) }} as tax,
    {{ json_extract_scalar('_airbyte_data', ['last_edit'], ['last_edit']) }} as last_edit,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['product_variation_id'], ['product_variation_id']) }} as product_variation_id,
    {{ json_extract_scalar('_airbyte_data', ['discount_percentage'], ['discount_percentage']) }} as discount_percentage,
    {{ json_extract_scalar('_airbyte_data', ['quantity_formatted'], ['quantity_formatted']) }} as quantity_formatted,
    {{ json_extract_scalar('_airbyte_data', ['duration_unit'], ['duration_unit']) }} as duration_unit,
    {{ json_extract_scalar('_airbyte_data', ['enabled_flag'], ['enabled_flag']) }} as enabled_flag,
    {{ json_extract_scalar('_airbyte_data', ['duration'], ['duration']) }} as duration,
    {{ json_extract_scalar('_airbyte_data', ['product_id'], ['product_id']) }} as product_id,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['currency'], ['currency']) }} as currency,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['deal_id'], ['deal_id']) }} as deal_id,
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_deal_products') }} as table_alias
-- deal_products
where 1 = 1

