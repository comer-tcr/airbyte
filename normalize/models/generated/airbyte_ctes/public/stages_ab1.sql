{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ source('public', '_airbyte_raw_stages') }}
select
    {{ json_extract_scalar('_airbyte_data', ['update_time'], ['update_time']) }} as update_time,
    {{ json_extract_scalar('_airbyte_data', ['pipeline_deal_probability'], ['pipeline_deal_probability']) }} as pipeline_deal_probability,
    {{ json_extract_scalar('_airbyte_data', ['order_nr'], ['order_nr']) }} as order_nr,
    {{ json_extract_scalar('_airbyte_data', ['name'], ['name']) }} as {{ adapter.quote('name') }},
    {{ json_extract_scalar('_airbyte_data', ['pipeline_id'], ['pipeline_id']) }} as pipeline_id,
    {{ json_extract_scalar('_airbyte_data', ['deal_probability'], ['deal_probability']) }} as deal_probability,
    {{ json_extract_scalar('_airbyte_data', ['active_flag'], ['active_flag']) }} as active_flag,
    {{ json_extract_scalar('_airbyte_data', ['rotten_flag'], ['rotten_flag']) }} as rotten_flag,
    {{ json_extract_scalar('_airbyte_data', ['id'], ['id']) }} as {{ adapter.quote('id') }},
    {{ json_extract_scalar('_airbyte_data', ['add_time'], ['add_time']) }} as add_time,
    {{ json_extract_scalar('_airbyte_data', ['rotten_days'], ['rotten_days']) }} as rotten_days,
    {{ json_extract_scalar('_airbyte_data', ['pipeline_name'], ['pipeline_name']) }} as pipeline_name,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ source('public', '_airbyte_raw_stages') }} as table_alias
-- stages
where 1 = 1

