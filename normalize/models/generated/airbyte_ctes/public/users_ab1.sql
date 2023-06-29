{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_users') }}
select
    {{ json_extract_scalar('_airbyte_data', ['icon_url'], ['icon_url']) }} as icon_url,
    {{ json_extract_scalar('_airbyte_data', ['is_you'], ['is_you']) }} as is_you,
    {{ json_extract_scalar('_airbyte_data', ['signup_flow_variation'], ['signup_flow_variation']) }} as signup_flow_variation,
    {{ json_extract_scalar('_airbyte_data', ['created'], ['created']) }} as created,
    {{ json_extract_scalar('_airbyte_data', ['last_login'], ['last_login']) }} as last_login,
    {{ json_extract_scalar('_airbyte_data', ['timezone_offset'], ['timezone_offset']) }} as timezone_offset,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['locale'], ['locale']) }} as locale,
    {{ json_extract_scalar('_airbyte_data', ['is_admin'], ['is_admin']) }} as is_admin,
    {{ json_extract_scalar('_airbyte_data', ['phone'], ['phone']) }} as phone,
    {{ json_extract_scalar('_airbyte_data', ['role_id'], ['role_id']) }} as role_id,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['timezone_name'], ['timezone_name']) }} as timezone_name,
    {{ json_extract_scalar('_airbyte_data', ['modified'], ['modified']) }} as modified,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['has_created_company'], ['has_created_company']) }} as has_created_company,
    {{ json_extract_scalar('_airbyte_data', ['lang'], ['lang']) }} as lang,
    {{ json_extract_scalar('_airbyte_data', ['default_currency'], ['default_currency']) }} as default_currency,
    {{ json_extract_scalar('_airbyte_data', ['email'], ['email']) }} as email,
    {{ json_extract_scalar('_airbyte_data', ['activated'], ['activated']) }} as activated,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_users') }} as table_alias
-- users
where 1 = 1

