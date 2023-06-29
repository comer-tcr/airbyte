{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='persons_scd'
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
-- depends_on: {{ ref('persons_ab3') }}
select
    related_closed_deals_count,
    email_messages_count,
    cc_email,
    owner_id,
    open_deals_count,
    last_outgoing_mail_time,
    active_flag,
    picture_id,
    last_activity_id,
    next_activity_date,
    update_time,
    participant_open_deals_count,
    activities_count,
    {{ adapter.quote('id') }},
    org_name,
    first_name,
    email,
    won_deals_count,
    owner_name,
    files_count,
    company_id,
    related_won_deals_count,
    last_incoming_mail_time,
    first_char,
    undone_activities_count,
    closed_deals_count,
    last_name,
    last_activity_date,
    {{ adapter.quote('label') }},
    next_activity_id,
    related_lost_deals_count,
    related_open_deals_count,
    phone,
    visible_to,
    org_id,
    notes_count,
    followers_count,
    {{ adapter.quote('name') }},
    participant_closed_deals_count,
    lost_deals_count,
    next_activity_time,
    add_time,
    done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_persons_hashid
from {{ ref('persons_ab3') }}
-- persons from {{ source('public', '_airbyte_raw_persons') }}
where 1 = 1

