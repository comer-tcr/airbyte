{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('deal_products_ab1') }}
select
    cast(sum_formatted as {{ dbt_utils.type_string() }}) as sum_formatted,
    cast({{ adapter.quote('comments') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('comments') }},
    cast(quantity as {{ dbt_utils.type_bigint() }}) as quantity,
    cast(sum_no_discount as {{ dbt_utils.type_float() }}) as sum_no_discount,
    cast(item_price as {{ dbt_utils.type_float() }}) as item_price,
    cast(order_nr as {{ dbt_utils.type_bigint() }}) as order_nr,
    cast({{ adapter.quote('sum') }} as {{ dbt_utils.type_float() }}) as {{ adapter.quote('sum') }},
    cast(tax as {{ dbt_utils.type_float() }}) as tax,
    cast(last_edit as {{ dbt_utils.type_string() }}) as last_edit,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(product_variation_id as {{ dbt_utils.type_bigint() }}) as product_variation_id,
    cast(discount_percentage as {{ dbt_utils.type_float() }}) as discount_percentage,
    cast(quantity_formatted as {{ dbt_utils.type_string() }}) as quantity_formatted,
    cast(duration_unit as {{ dbt_utils.type_string() }}) as duration_unit,
    {{ cast_to_boolean('enabled_flag') }} as enabled_flag,
    cast(duration as {{ dbt_utils.type_bigint() }}) as duration,
    cast(product_id as {{ dbt_utils.type_bigint() }}) as product_id,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(currency as {{ dbt_utils.type_string() }}) as currency,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(deal_id as {{ dbt_utils.type_bigint() }}) as deal_id,
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('deal_products_ab1') }}
-- deal_products
where 1 = 1

