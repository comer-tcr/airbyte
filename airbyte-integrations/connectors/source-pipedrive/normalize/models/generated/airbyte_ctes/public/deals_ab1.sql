{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_deals') }}
select
    {{ json_extract_scalar('_airbyte_data', ['email_messages_count'], ['email_messages_count']) }} as email_messages_count,
    {{ json_extract_scalar('_airbyte_data', ['cc_email'], ['cc_email']) }} as cc_email,
    {{ json_extract_scalar('_airbyte_data', ['products_count'], ['products_count']) }} as products_count,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_date'], ['next_activity_date']) }} as next_activity_date,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_type'], ['next_activity_type']) }} as next_activity_type,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_duration'], ['next_activity_duration']) }} as next_activity_duration,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['person_id'], ['person_id']) }} as person_id,
    {{ json_extract_scalar('_airbyte_data', ['expected_close_date'], ['expected_close_date']) }} as expected_close_date,
    {{ json_extract_scalar('_airbyte_data', ['owner_name'], ['owner_name']) }} as owner_name,
    {{ json_extract_scalar('_airbyte_data', ['participants_count'], ['participants_count']) }} as participants_count,
    {{ json_extract_scalar('_airbyte_data', ['stage_id'], ['stage_id']) }} as stage_id,
    {{ json_extract_scalar('_airbyte_data', ['probability'], ['probability']) }} as probability,
    {{ json_extract_scalar('_airbyte_data', ['undone_activities_count'], ['undone_activities_count']) }} as undone_activities_count,
    {{ json_extract_scalar('_airbyte_data', ['active'], ['active']) }} as active,
    {{ json_extract_scalar('_airbyte_data', ['person_name'], ['person_name']) }} as person_name,
    {{ json_extract_scalar('_airbyte_data', ['last_activity_date'], ['last_activity_date']) }} as last_activity_date,
    {{ json_extract_scalar('_airbyte_data', ['close_time'], ['close_time']) }} as close_time,
    {{ json_extract_scalar('_airbyte_data', ['org_hidden'], ['org_hidden']) }} as org_hidden,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_id'], ['next_activity_id']) }} as next_activity_id,
    {{ json_extract_scalar('_airbyte_data', ['weighted_value_currency'], ['weighted_value_currency']) }} as weighted_value_currency,
    {{ json_extract_scalar('_airbyte_data', ['stage_order_nr'], ['stage_order_nr']) }} as stage_order_nr,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_subject'], ['next_activity_subject']) }} as next_activity_subject,
    {{ json_extract_scalar('_airbyte_data', ['rotten_time'], ['rotten_time']) }} as rotten_time,
    {{ json_extract_scalar('_airbyte_data', ['user_id'], ['user_id']) }} as user_id,
    {{ json_extract_scalar('_airbyte_data', ['visible_to'], ['visible_to']) }} as visible_to,
    {{ json_extract_scalar('_airbyte_data', ['org_id'], ['org_id']) }} as org_id,
    {{ json_extract_scalar('_airbyte_data', ['notes_count'], ['notes_count']) }} as notes_count,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_time'], ['next_activity_time']) }} as next_activity_time,
    {{ json_extract_scalar('_airbyte_data', ['formatted_value'], ['formatted_value']) }} as formatted_value,
    {{ json_extract_scalar('_airbyte_data', ['status'], ['status']) }} as status,
    {{ json_extract_scalar('_airbyte_data', ['formatted_weighted_value'], ['formatted_weighted_value']) }} as formatted_weighted_value,
    {{ json_extract_scalar('_airbyte_data', ['first_won_time'], ['first_won_time']) }} as first_won_time,
    {{ json_extract_scalar('_airbyte_data', ['last_outgoing_mail_time'], ['last_outgoing_mail_time']) }} as last_outgoing_mail_time,
    {{ json_extract_scalar('_airbyte_data', ['title'], ['title']) }} as title,
    {{ json_extract_scalar('_airbyte_data', ['last_activity_id'], ['last_activity_id']) }} as last_activity_id,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['activities_count'], ['activities_count']) }} as activities_count,
    {{ json_extract_scalar('_airbyte_data', ['pipeline_id'], ['pipeline_id']) }} as pipeline_id,
    {{ json_extract_scalar('_airbyte_data', ['lost_time'], ['lost_time']) }} as lost_time,
    {{ json_extract_scalar('_airbyte_data', ['currency'], ['currency']) }} as currency,
    {{ json_extract_scalar('_airbyte_data', ['weighted_value'], ['weighted_value']) }} as weighted_value,
    {{ json_extract_scalar('_airbyte_data', ['org_name'], ['org_name']) }} as org_name,
    {{ json_extract_scalar('_airbyte_data', ['value'], ['value']) }} as {{ adapter.quote('value') }},
    {{ json_extract_scalar('_airbyte_data', ['person_hidden'], ['person_hidden']) }} as person_hidden,
    {{ json_extract_scalar('_airbyte_data', ['next_activity_note'], ['next_activity_note']) }} as next_activity_note,
    {{ json_extract_scalar('_airbyte_data', ['files_count'], ['files_count']) }} as files_count,
    {{ json_extract_scalar('_airbyte_data', ['last_incoming_mail_time'], ['last_incoming_mail_time']) }} as last_incoming_mail_time,
    {{ json_extract_scalar('_airbyte_data', ['remote_id'], ['remote_id']) }} as remote_id,
    {{ json_extract_scalar('_airbyte_data', ['label'], ['label']) }} as {{ adapter.quote('label') }},
    {{ json_extract_scalar('_airbyte_data', ['lost_reason'], ['lost_reason']) }} as lost_reason,
    {{ json_extract_scalar('_airbyte_data', ['deleted'], ['deleted']) }} as deleted,
    {{ json_extract_scalar('_airbyte_data', ['won_time'], ['won_time']) }} as won_time,
    {{ json_extract_scalar('_airbyte_data', ['followers_count'], ['followers_count']) }} as followers_count,
    {{ json_extract_scalar('_airbyte_data', ['stage_change_time'], ['stage_change_time']) }} as stage_change_time,
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['done_activities_count'], ['done_activities_count']) }} as done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_deals') }} as table_alias
-- deals
where 1 = 1

