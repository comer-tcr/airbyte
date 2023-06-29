{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_files') }}
select
    {{ json_extract_scalar('_airbyte_data', ['description'], ['description']) }} as description,
    {{ json_extract_scalar('_airbyte_data', ['lead_name'], ['lead_name']) }} as lead_name,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['s3_bucket'], ['s3_bucket']) }} as s3_bucket,
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['inline_flag'], ['inline_flag']) }} as inline_flag,
    {{ json_extract_scalar('_airbyte_data', ['file_type'], ['file_type']) }} as file_type,
    {{ json_extract_scalar('_airbyte_data', ['product_id'], ['product_id']) }} as product_id,
    {{ json_extract_scalar('_airbyte_data', ['activity_id'], ['activity_id']) }} as activity_id,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['people_name'], ['people_name']) }} as people_name,
    {{ json_extract_scalar('_airbyte_data', ['remote_location'], ['remote_location']) }} as remote_location,
    {{ json_extract_scalar('_airbyte_data', ['deal_id'], ['deal_id']) }} as deal_id,
    {{ json_extract_scalar('_airbyte_data', ['org_name'], ['org_name']) }} as org_name,
    {{ json_extract_scalar('_airbyte_data', ['mail_template_id'], ['mail_template_id']) }} as mail_template_id,
    {{ json_extract_scalar('_airbyte_data', ['lead_id'], ['lead_id']) }} as lead_id,
    {{ json_extract_scalar('_airbyte_data', ['person_id'], ['person_id']) }} as person_id,
    {{ json_extract_scalar('_airbyte_data', ['log_id'], ['log_id']) }} as log_id,
    {{ json_extract_scalar('_airbyte_data', ['file_name'], ['file_name']) }} as file_name,
    {{ json_extract_scalar('_airbyte_data', ['mail_message_id'], ['mail_message_id']) }} as mail_message_id,
    {{ json_extract_scalar('_airbyte_data', ['remote_id'], ['remote_id']) }} as remote_id,
    {{ json_extract_scalar('_airbyte_data', ['person_name'], ['person_name']) }} as person_name,
    {{ json_extract_scalar('_airbyte_data', ['product_name'], ['product_name']) }} as product_name,
    {{ json_extract_scalar('_airbyte_data', ['url'], ['url']) }} as url,
    {{ json_extract_scalar('_airbyte_data', ['file_size'], ['file_size']) }} as file_size,
    {{ json_extract_scalar('_airbyte_data', ['user_id'], ['user_id']) }} as user_id,
    {{ json_extract_scalar('_airbyte_data', ['org_id'], ['org_id']) }} as org_id,
    {{ json_extract_scalar('_airbyte_data', ['deal_name'], ['deal_name']) }} as deal_name,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['cid'], ['cid']) }} as cid,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_files') }} as table_alias
-- files
where 1 = 1

