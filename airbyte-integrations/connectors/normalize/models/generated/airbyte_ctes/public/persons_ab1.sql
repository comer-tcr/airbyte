{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_persons') }}
select
    {{ json_extract_scalar('_airbyte_data', ['related_closed_deals_count'], ['related_closed_deals_count']) }} as related_closed_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['email_messages_count'], ['email_messages_count']) }} as email_messages_count,
    {{ json_extract_scalar('_airbyte_data', ['cc_email'], ['cc_email']) }} as cc_email,
    {{ json_extract_scalar('_airbyte_data', ['owner_id'], ['owner_id']) }} as owner_id,
    {{ json_extract_scalar('_airbyte_data', ['open_deals_count'], ['open_deals_count']) }} as open_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['last_outgoing_mail_time'], ['last_outgoing_mail_time']) }} as last_outgoing_mail_time,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract('table_alias', '_airbyte_data', ['picture_id'], ['picture_id']) }} as picture_id,
    {{ json_extract_scalar('_airbyte_data', ['last_activity_id'], ['last_activity_id']) }} as last_activity_id,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_date'], ['next_activity_date']) }} as next_activity_date,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['participant_open_deals_count'], ['participant_open_deals_count']) }} as participant_open_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['activities_count'], ['activities_count']) }} as activities_count,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['org_name'], ['org_name']) }} as org_name,
    {{ json_extract_scalar('_airbyte_data', ['first_name'], ['first_name']) }} as first_name,
    {{ json_extract_array('_airbyte_data', ['email'], ['email']) }} as email,
    {{ json_extract_scalar('_airbyte_data', ['won_deals_count'], ['won_deals_count']) }} as won_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['owner_name'], ['owner_name']) }} as owner_name,
    {{ json_extract_scalar('_airbyte_data', ['files_count'], ['files_count']) }} as files_count,
    {{ json_extract_scalar('_airbyte_data', ['company_id'], ['company_id']) }} as company_id,
    {{ json_extract_scalar('_airbyte_data', ['related_won_deals_count'], ['related_won_deals_count']) }} as related_won_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['last_incoming_mail_time'], ['last_incoming_mail_time']) }} as last_incoming_mail_time,
    {{ json_extract_scalar('_airbyte_data', ['first_char'], ['first_char']) }} as first_char,
    {{ json_extract_scalar('_airbyte_data', ['undone_activities_count'], ['undone_activities_count']) }} as undone_activities_count,
    {{ json_extract_scalar('_airbyte_data', ['closed_deals_count'], ['closed_deals_count']) }} as closed_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['last_name'], ['last_name']) }} as last_name,
    {{ json_extract_scalar('_airbyte_data', ['last_activity_date'], ['last_activity_date']) }} as last_activity_date,
    {{ json_extract_scalar('_airbyte_data', ['label'], ['label']) }} as {{ adapter.quote('label') }},
    {{ json_extract_scalar('_airbyte_data', ['next_activity_id'], ['next_activity_id']) }} as next_activity_id,
    {{ json_extract_scalar('_airbyte_data', ['related_lost_deals_count'], ['related_lost_deals_count']) }} as related_lost_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['related_open_deals_count'], ['related_open_deals_count']) }} as related_open_deals_count,
    {{ json_extract_array('_airbyte_data', ['phone'], ['phone']) }} as phone,
    {{ json_extract_scalar('_airbyte_data', ['visible_to'], ['visible_to']) }} as visible_to,
    {{ json_extract_scalar('_airbyte_data', ['org_id'], ['org_id']) }} as org_id,
    {{ json_extract_scalar('_airbyte_data', ['notes_count'], ['notes_count']) }} as notes_count,
    {{ json_extract_scalar('_airbyte_data', ['followers_count'], ['followers_count']) }} as followers_count,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['participant_closed_deals_count'], ['participant_closed_deals_count']) }} as participant_closed_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['lost_deals_count'], ['lost_deals_count']) }} as lost_deals_count,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_time'], ['next_activity_time']) }} as next_activity_time,
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['done_activities_count'], ['done_activities_count']) }} as done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_persons') }} as table_alias
-- persons
where 1 = 1

