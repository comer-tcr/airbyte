{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('files_ab1') }}
select
    cast(description as {{ dbt_utils.type_string() }}) as description,
    cast(lead_name as {{ dbt_utils.type_string() }}) as lead_name,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(s3_bucket as {{ dbt_utils.type_string() }}) as s3_bucket,
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    {{ cast_to_boolean('inline_flag') }} as inline_flag,
    cast(file_type as {{ dbt_utils.type_string() }}) as file_type,
    cast(product_id as {{ dbt_utils.type_bigint() }}) as product_id,
    cast(activity_id as {{ dbt_utils.type_bigint() }}) as activity_id,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(people_name as {{ dbt_utils.type_string() }}) as people_name,
    cast(remote_location as {{ dbt_utils.type_string() }}) as remote_location,
    cast(deal_id as {{ dbt_utils.type_bigint() }}) as deal_id,
    cast(org_name as {{ dbt_utils.type_string() }}) as org_name,
    cast(mail_template_id as {{ dbt_utils.type_bigint() }}) as mail_template_id,
    cast(lead_id as {{ dbt_utils.type_bigint() }}) as lead_id,
    cast(person_id as {{ dbt_utils.type_bigint() }}) as person_id,
    cast(log_id as {{ dbt_utils.type_bigint() }}) as log_id,
    cast(file_name as {{ dbt_utils.type_string() }}) as file_name,
    cast(mail_message_id as {{ dbt_utils.type_bigint() }}) as mail_message_id,
    cast(remote_id as {{ dbt_utils.type_string() }}) as remote_id,
    cast(person_name as {{ dbt_utils.type_string() }}) as person_name,
    cast(product_name as {{ dbt_utils.type_string() }}) as product_name,
    cast(url as {{ dbt_utils.type_string() }}) as url,
    cast(file_size as {{ dbt_utils.type_bigint() }}) as file_size,
    cast(user_id as {{ dbt_utils.type_bigint() }}) as user_id,
    cast(org_id as {{ dbt_utils.type_bigint() }}) as org_id,
    cast(deal_name as {{ dbt_utils.type_string() }}) as deal_name,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(cid as {{ dbt_utils.type_bigint() }}) as cid,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('files_ab1') }}
-- files
where 1 = 1

