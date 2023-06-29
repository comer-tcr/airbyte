{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('leads_ab1') }}
select
    cast({{ empty_string_to_null('expected_close_date') }} as {{ type_date() }}) as expected_close_date,
    cast(owner_id as {{ dbt_utils.type_bigint() }}) as owner_id,
    label_ids,
    {{ cast_to_boolean('was_seen') }} as was_seen,
    cast(title as {{ dbt_utils.type_string() }}) as title,
    cast(next_activity_id as {{ dbt_utils.type_bigint() }}) as next_activity_id,
    cast(update_time as {{ dbt_utils.type_string() }}) as update_time,
    {{ cast_to_boolean('is_archived') }} as is_archived,
    cast(organization_id as {{ dbt_utils.type_bigint() }}) as organization_id,
    cast(creator_id as {{ dbt_utils.type_bigint() }}) as creator_id,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('id') }},
    cast({{ adapter.quote('value') }} as {{ type_json() }}) as {{ adapter.quote('value') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(source_name as {{ dbt_utils.type_string() }}) as source_name,
    cast(person_id as {{ dbt_utils.type_bigint() }}) as person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('leads_ab1') }}
-- leads
where 1 = 1

