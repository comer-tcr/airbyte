{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('organizations_owner_id_ab1') }}
select
    _airbyte_organizations_hashid,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(has_pic as {{ dbt_utils.type_float() }}) as has_pic,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_float() }}) as {{ adapter.quote('id') }},
    cast({{ adapter.quote('value') }} as {{ dbt_utils.type_float() }}) as {{ adapter.quote('value') }},
    cast(email as {{ dbt_utils.type_string() }}) as email,
    cast(pic_hash as {{ dbt_utils.type_string() }}) as pic_hash,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations_owner_id_ab1') }}
-- owner_id at organizations/owner_id
where 1 = 1

