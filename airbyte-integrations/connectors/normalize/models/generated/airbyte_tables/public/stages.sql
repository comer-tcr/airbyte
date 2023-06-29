{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='stages_scd'
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
-- depends_on: {{ ref('stages_ab3') }}
select
    update_time,
    pipeline_deal_probability,
    order_nr,
    {{ adapter.quote('name') }},
    pipeline_id,
    deal_probability,
    active_flag,
    rotten_flag,
    {{ adapter.quote('id') }},
    add_time,
    rotten_days,
    pipeline_name,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_stages_hashid
from {{ ref('stages_ab3') }}
-- stages from {{ source('public', '_airbyte_raw_stages') }}
where 1 = 1

