{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='notes_scd'
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
-- depends_on: {{ ref('notes_ab3') }}
select
    deal,
    active_flag,
    last_update_user_id,
    pinned_to_person_flag,
    {{ adapter.quote('lead') }},
    {{ adapter.quote('content') }},
    pinned_to_deal_flag,
    update_time,
    pinned_to_organization_flag,
    user_id,
    org_id,
    person,
    organization,
    {{ adapter.quote('id') }},
    pinned_to_lead_flag,
    deal_id,
    {{ adapter.quote('user') }},
    add_time,
    lead_id,
    person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_notes_hashid
from {{ ref('notes_ab3') }}
-- notes from {{ source('public', '_airbyte_raw_notes') }}
where 1 = 1

