{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='deal_products_scd'
                        )
                    %}
                    {%
                        if scd_table_relation is not none
                    %}
                    {%
                            do adapter.drop_relation(scd_table_relation)
                    %}
                    {% endif %}
                        "],
    tags = [ "top-level" ]
) }}
-- Final base SQL model
-- depends_on: {{ ref('deal_products_ab3') }}
select
    sum_formatted,
    {{ adapter.quote('comments') }},
    quantity,
    sum_no_discount,
    item_price,
    order_nr,
    {{ adapter.quote('sum') }},
    tax,
    last_edit,
    active_flag,
    product_variation_id,
    discount_percentage,
    quantity_formatted,
    duration_unit,
    enabled_flag,
    duration,
    product_id,
    {{ adapter.quote('name') }},
    currency,
    {{ adapter.quote('id') }},
    deal_id,
    add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_deal_products_hashid
from {{ ref('deal_products_ab3') }}
-- deal_products from {{ source('public', '_airbyte_raw_deal_products') }}
where 1 = 1

