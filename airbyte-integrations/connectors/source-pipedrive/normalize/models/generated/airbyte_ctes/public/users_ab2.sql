{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('users_ab1') }}
select
    cast(icon_url as {{ dbt_utils.type_string() }}) as icon_url,
    {{ cast_to_boolean('is_you') }} as is_you,
    cast(signup_flow_variation as {{ dbt_utils.type_string() }}) as signup_flow_variation,
    cast(created as {{ dbt_utils.type_string() }}) as created,
    cast(last_login as {{ dbt_utils.type_string() }}) as last_login,
    cast(timezone_offset as {{ dbt_utils.type_string() }}) as timezone_offset,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(locale as {{ dbt_utils.type_string() }}) as locale,
    cast(is_admin as {{ dbt_utils.type_bigint() }}) as is_admin,
    cast(phone as {{ dbt_utils.type_string() }}) as phone,
    cast(role_id as {{ dbt_utils.type_bigint() }}) as role_id,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(timezone_name as {{ dbt_utils.type_string() }}) as timezone_name,
    cast({{ empty_string_to_null('modified') }} as {{ type_timestamp_without_timezone() }}) as modified,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    {{ cast_to_boolean('has_created_company') }} as has_created_company,
    cast(lang as {{ dbt_utils.type_bigint() }}) as lang,
    cast(default_currency as {{ dbt_utils.type_string() }}) as default_currency,
    cast(email as {{ dbt_utils.type_string() }}) as email,
    {{ cast_to_boolean('activated') }} as activated,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('users_ab1') }}
-- users
where 1 = 1

