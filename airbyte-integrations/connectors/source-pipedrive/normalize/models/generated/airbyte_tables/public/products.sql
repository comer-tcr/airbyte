{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='products_scd'
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
-- depends_on: {{ ref('products_ab3') }}
select
    code,
    owner_name,
    files_count,
    owner_id,
    first_char,
    selectable,
    description,
    tax,
    active_flag,
    unit,
    update_time,
    visible_to,
    followers_count,
    {{ adapter.quote('name') }},
    {{ adapter.quote('id') }},
    prices,
    category,
    add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_products_hashid
from {{ ref('products_ab3') }}
-- products from {{ source('public', '_airbyte_raw_products') }}
where 1 = 1

