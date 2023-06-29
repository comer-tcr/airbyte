{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='leads_scd'
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
-- depends_on: {{ ref('leads_ab3') }}
select
    expected_close_date,
    owner_id,
    label_ids,
    was_seen,
    title,
    next_activity_id,
    update_time,
    is_archived,
    organization_id,
    creator_id,
    {{ adapter.quote('id') }},
    {{ adapter.quote('value') }},
    add_time,
    source_name,
    person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_leads_hashid
from {{ ref('leads_ab3') }}
-- leads from {{ source('public', '_airbyte_raw_leads') }}
where 1 = 1

