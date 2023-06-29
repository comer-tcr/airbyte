{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='product_fields_scd'
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
-- depends_on: {{ ref('product_fields_ab3') }}
select
    bulk_edit_allowed,
    edit_flag,
    add_visible_flag,
    order_nr,
    {{ adapter.quote('link') }},
    active_flag,
    use_field,
    json_column_flag,
    index_visible_flag,
    mandatory_flag,
    filtering_allowed,
    update_time,
    details_visible_flag,
    sortable_flag,
    searchable_flag,
    {{ adapter.quote('name') }},
    {{ adapter.quote('options') }},
    last_updated_by_user_id,
    {{ adapter.quote('id') }},
    add_time,
    field_type,
    {{ adapter.quote('key') }},
    important_flag,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_product_fields_hashid
from {{ ref('product_fields_ab3') }}
-- product_fields from {{ source('public', '_airbyte_raw_product_fields') }}
where 1 = 1

