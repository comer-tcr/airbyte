{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='deal_fields_scd'
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
-- depends_on: {{ ref('deal_fields_ab3') }}
select
    bulk_edit_allowed,
    edit_flag,
    add_visible_flag,
    order_nr,
    active_flag,
    mandatory_flag,
    filtering_allowed,
    update_time,
    deal_remote_id,
    sortable_flag,
    searchable_flag,
    {{ adapter.quote('name') }},
    {{ adapter.quote('options') }},
    last_updated_by_user_id,
    {{ adapter.quote('id') }},
    deal_custom_field_key,
    add_time,
    field_type,
    {{ adapter.quote('key') }},
    pipeline_ids,
    important_flag,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_deal_fields_hashid
from {{ ref('deal_fields_ab3') }}
-- deal_fields from {{ source('public', '_airbyte_raw_deal_fields') }}
where 1 = 1

