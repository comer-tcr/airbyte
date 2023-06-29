{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('roles_ab1') }}
select
    cast({{ adapter.quote('level') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('level') }},
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(description as {{ dbt_utils.type_string() }}) as description,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast(parent_role_id as {{ dbt_utils.type_bigint() }}) as parent_role_id,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(assignment_count as {{ dbt_utils.type_string() }}) as assignment_count,
    cast(sub_role_count as {{ dbt_utils.type_string() }}) as sub_role_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('roles_ab1') }}
-- roles
where 1 = 1

