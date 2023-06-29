{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='filters_scd'
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
-- depends_on: {{ ref('filters_ab3') }}
select
    update_time,
    custom_view_id,
    user_id,
    visible_to,
    {{ adapter.quote('name') }},
    active_flag,
    {{ adapter.quote('id') }},
    temporary_flag,
    {{ adapter.quote('type') }},
    add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_filters_hashid
from {{ ref('filters_ab3') }}
-- filters from {{ source('public', '_airbyte_raw_filters') }}
where 1 = 1

