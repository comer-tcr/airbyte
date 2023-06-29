{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('notes_ab1') }}
select
    cast(deal as {{ type_json() }}) as deal,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(last_update_user_id as {{ dbt_utils.type_bigint() }}) as last_update_user_id,
    {{ cast_to_boolean('pinned_to_person_flag') }} as pinned_to_person_flag,
    cast({{ adapter.quote('lead') }} as {{ type_json() }}) as {{ adapter.quote('lead') }},
    cast({{ adapter.quote('content') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('content') }},
    {{ cast_to_boolean('pinned_to_deal_flag') }} as pinned_to_deal_flag,
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    {{ cast_to_boolean('pinned_to_organization_flag') }} as pinned_to_organization_flag,
    cast(user_id as {{ dbt_utils.type_bigint() }}) as user_id,
    cast(org_id as {{ dbt_utils.type_bigint() }}) as org_id,
    cast(person as {{ type_json() }}) as person,
    cast(organization as {{ type_json() }}) as organization,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    {{ cast_to_boolean('pinned_to_lead_flag') }} as pinned_to_lead_flag,
    cast(deal_id as {{ dbt_utils.type_bigint() }}) as deal_id,
    cast({{ adapter.quote('user') }} as {{ type_json() }}) as {{ adapter.quote('user') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(lead_id as {{ dbt_utils.type_bigint() }}) as lead_id,
    cast(person_id as {{ dbt_utils.type_bigint() }}) as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('notes_ab1') }}
-- notes
where 1 = 1

