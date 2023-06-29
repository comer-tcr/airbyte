{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_notes') }}
select
    {{ json_extract('table_alias', '_airbyte_data', ['deal'], ['deal']) }} as deal,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['last_update_user_id'], ['last_update_user_id']) }} as last_update_user_id,
    {{ json_extract_scalar('_airbyte_data', ['pinned_to_person_flag'], ['pinned_to_person_flag']) }} as pinned_to_person_flag,
    {{ json_extract('table_alias', '_airbyte_data', ['lead'], ['lead']) }} as {{ adapter.quote('lead') }},
    {{ json_extract_scalar('_airbyte_data', ['content'], ['content']) }} as {{ adapter.quote('content') }},
    {{ json_extract_scalar('_airbyte_data', ['pinned_to_deal_flag'], ['pinned_to_deal_flag']) }} as pinned_to_deal_flag,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['pinned_to_organization_flag'], ['pinned_to_organization_flag']) }} as pinned_to_organization_flag,
    {{ json_extract_scalar('_airbyte_data', ['user_id'], ['user_id']) }} as user_id,
    {{ json_extract_scalar('_airbyte_data', ['org_id'], ['org_id']) }} as org_id,
    {{ json_extract('table_alias', '_airbyte_data', ['person'], ['person']) }} as person,
    {{ json_extract('table_alias', '_airbyte_data', ['organization'], ['organization']) }} as organization,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['pinned_to_lead_flag'], ['pinned_to_lead_flag']) }} as pinned_to_lead_flag,
    {{ json_extract_scalar('_airbyte_data', ['deal_id'], ['deal_id']) }} as deal_id,
    {{ json_extract('table_alias', '_airbyte_data', ['user'], ['user']) }} as {{ adapter.quote('user') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['lead_id'], ['lead_id']) }} as lead_id,
    {{ json_extract_scalar('_airbyte_data', ['person_id'], ['person_id']) }} as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_notes') }} as table_alias
-- notes
where 1 = 1

