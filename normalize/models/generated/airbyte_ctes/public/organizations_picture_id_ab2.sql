{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('organizations_picture_id_ab1') }}
select
    _airbyte_organizations_hashid,
    cast(update_time as {{ dbt_utils.type_string() }}) as update_time,
    cast(added_by_user_id as {{ dbt_utils.type_float() }}) as added_by_user_id,
    cast(item_id as {{ dbt_utils.type_float() }}) as item_id,
    cast(item_type as {{ dbt_utils.type_string() }}) as item_type,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    cast({{ adapter.quote('value') }} as {{ dbt_utils.type_float() }}) as {{ adapter.quote('value') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(pictures as {{ type_json() }}) as pictures,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations_picture_id_ab1') }}
-- picture_id at organizations/picture_id
where 1 = 1

