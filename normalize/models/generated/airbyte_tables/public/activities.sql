{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='activities_scd'
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
-- depends_on: {{ ref('activities_ab3') }}
select
    last_notification_time,
    location_street_number,
    type_name,
    reference_id,
    location_route,
    public_description,
    notification_language_id,
    subject,
    {{ adapter.quote('type') }},
    google_calendar_etag,
    google_calendar_id,
    deal_title,
    {{ adapter.quote('id') }},
    deal_id,
    location_lat,
    gcal_event_id,
    busy_flag,
    person_id,
    location_long,
    owner_name,
    attendees,
    person_name,
    rec_rule_extension,
    done,
    created_by_user_id,
    location_sublocality,
    rec_rule,
    location_admin_area_level_2,
    user_id,
    location_admin_area_level_1,
    org_id,
    conference_meeting_client,
    note,
    due_time,
    rec_master_activity_id,
    location_country,
    active_flag,
    duration,
    location_postal_code,
    update_time,
    {{ adapter.quote('file') }},
    update_user_id,
    source_timezone,
    person_dropbox_bcc,
    conference_meeting_id,
    org_name,
    location_locality,
    assigned_to_user_id,
    lead_id,
    participants,
    location_subpremise,
    company_id,
    due_date,
    reference_type,
    last_notification_user_id,
    calendar_sync_include_context,
    marked_as_done_time,
    location_formatted_address,
    series,
    conference_meeting_url,
    {{ adapter.quote('location') }},
    deal_dropbox_bcc,
    add_time,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_activities_hashid
from {{ ref('activities_ab3') }}
-- activities from {{ source('public', '_airbyte_raw_activities') }}
where 1 = 1

