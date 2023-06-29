{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='activity_types_scd'
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
-- depends_on: {{ ref('activity_types_ab3') }}
select
    icon_key,
    update_time,
    is_custom_flag,
    color,
    key_string,
    order_nr,
    {{ adapter.quote('name') }},
    active_flag,
    {{ adapter.quote('id') }},
    add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_activity_types_hashid
from {{ ref('activity_types_ab3') }}
-- activity_types from {{ source('public', '_airbyte_raw_activity_types') }}
where 1 = 1

