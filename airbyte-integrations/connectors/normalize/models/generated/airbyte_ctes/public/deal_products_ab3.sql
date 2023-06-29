{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('deal_products_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'sum_formatted',
        adapter.quote('comments'),
        'quantity',
        'sum_no_discount',
        'item_price',
        'order_nr',
        adapter.quote('sum'),
        'tax',
        'last_edit',
        boolean_to_string('active_flag'),
        'product_variation_id',
        'discount_percentage',
        'quantity_formatted',
        'duration_unit',
        boolean_to_string('enabled_flag'),
        'duration',
        'product_id',
        adapter.quote('name'),
        'currency',
        adapter.quote('id'),
        'deal_id',
        'add_time',
    ]) }} as _airbyte_deal_products_hashid,
    tmp.*
from {{ ref('deal_products_ab2') }} tmp
-- deal_products
where 1 = 1

