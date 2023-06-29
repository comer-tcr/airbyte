{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='deals_scd'
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
-- depends_on: {{ ref('deals_ab3') }}
select
    email_messages_count,
    cc_email,
    products_count,
    next_activity_date,
    next_activity_type,
    next_activity_duration,
    {{ adapter.quote('id') }},
    person_id,
    expected_close_date,
    owner_name,
    participants_count,
    stage_id,
    probability,
    undone_activities_count,
    active,
    person_name,
    last_activity_date,
    close_time,
    org_hidden,
    next_activity_id,
    weighted_value_currency,
    stage_order_nr,
    next_activity_subject,
    rotten_time,
    user_id,
    visible_to,
    org_id,
    notes_count,
    next_activity_time,
    formatted_value,
    status,
    formatted_weighted_value,
    first_won_time,
    last_outgoing_mail_time,
    title,
    last_activity_id,
    update_time,
    activities_count,
    pipeline_id,
    lost_time,
    currency,
    weighted_value,
    org_name,
    {{ adapter.quote('value') }},
    person_hidden,
    next_activity_note,
    files_count,
    last_incoming_mail_time,
    remote_id,
    {{ adapter.quote('label') }},
    lost_reason,
    deleted,
    won_time,
    followers_count,
    stage_change_time,
    add_time,
    done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_deals_hashid
from {{ ref('deals_ab3') }}
-- deals from {{ source('public', '_airbyte_raw_deals') }}
where 1 = 1

