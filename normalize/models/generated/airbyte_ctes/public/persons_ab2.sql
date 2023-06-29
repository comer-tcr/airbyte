{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('persons_ab1') }}
select
    cast(related_closed_deals_count as {{ dbt_utils.type_bigint() }}) as related_closed_deals_count,
    cast(email_messages_count as {{ dbt_utils.type_bigint() }}) as email_messages_count,
    cast(cc_email as {{ dbt_utils.type_string() }}) as cc_email,
    cast(owner_id as {{ dbt_utils.type_bigint() }}) as owner_id,
    cast(open_deals_count as {{ dbt_utils.type_bigint() }}) as open_deals_count,
    cast(last_outgoing_mail_time as {{ dbt_utils.type_string() }}) as last_outgoing_mail_time,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(picture_id as {{ type_json() }}) as picture_id,
    cast(last_activity_id as {{ dbt_utils.type_bigint() }}) as last_activity_id,
    cast({{ empty_string_to_null('next_activity_date') }} as {{ type_date() }}) as next_activity_date,
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    cast(participant_open_deals_count as {{ dbt_utils.type_bigint() }}) as participant_open_deals_count,
    cast(activities_count as {{ dbt_utils.type_bigint() }}) as activities_count,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(org_name as {{ dbt_utils.type_string() }}) as org_name,
    cast(first_name as {{ dbt_utils.type_string() }}) as first_name,
    email,
    cast(won_deals_count as {{ dbt_utils.type_bigint() }}) as won_deals_count,
    cast(owner_name as {{ dbt_utils.type_string() }}) as owner_name,
    cast(files_count as {{ dbt_utils.type_bigint() }}) as files_count,
    cast(company_id as {{ dbt_utils.type_bigint() }}) as company_id,
    cast(related_won_deals_count as {{ dbt_utils.type_bigint() }}) as related_won_deals_count,
    cast(last_incoming_mail_time as {{ dbt_utils.type_string() }}) as last_incoming_mail_time,
    cast(first_char as {{ dbt_utils.type_string() }}) as first_char,
    cast(undone_activities_count as {{ dbt_utils.type_bigint() }}) as undone_activities_count,
    cast(closed_deals_count as {{ dbt_utils.type_bigint() }}) as closed_deals_count,
    cast(last_name as {{ dbt_utils.type_string() }}) as last_name,
    cast(last_activity_date as {{ dbt_utils.type_string() }}) as last_activity_date,
    cast({{ adapter.quote('label') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('label') }},
    cast(next_activity_id as {{ dbt_utils.type_bigint() }}) as next_activity_id,
    cast(related_lost_deals_count as {{ dbt_utils.type_bigint() }}) as related_lost_deals_count,
    cast(related_open_deals_count as {{ dbt_utils.type_bigint() }}) as related_open_deals_count,
    phone,
    cast(visible_to as {{ dbt_utils.type_string() }}) as visible_to,
    cast(org_id as {{ dbt_utils.type_bigint() }}) as org_id,
    cast(notes_count as {{ dbt_utils.type_bigint() }}) as notes_count,
    cast(followers_count as {{ dbt_utils.type_bigint() }}) as followers_count,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(participant_closed_deals_count as {{ dbt_utils.type_bigint() }}) as participant_closed_deals_count,
    cast(lost_deals_count as {{ dbt_utils.type_bigint() }}) as lost_deals_count,
    cast({{ empty_string_to_null('next_activity_time') }} as {{ type_time_without_timezone() }}) as next_activity_time,
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(done_activities_count as {{ dbt_utils.type_bigint() }}) as done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('persons_ab1') }}
-- persons
where 1 = 1

