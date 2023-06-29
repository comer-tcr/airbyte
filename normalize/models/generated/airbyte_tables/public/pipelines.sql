{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='pipelines_scd'
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
-- depends_on: {{ ref('pipelines_ab3') }}
select
    update_time,
    url_title,
    order_nr,
    {{ adapter.quote('name') }},
    active,
    deal_probability,
    {{ adapter.quote('id') }},
    add_time,
    selected,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_pipelines_hashid
from {{ ref('pipelines_ab3') }}
-- pipelines from {{ source('public', '_airbyte_raw_pipelines') }}
where 1 = 1

