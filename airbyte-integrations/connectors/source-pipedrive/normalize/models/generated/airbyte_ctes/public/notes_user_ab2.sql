{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('notes_user_ab1') }}
select
    _airbyte_notes_hashid,
    cast(icon_url as {{ dbt_utils.type_string() }}) as icon_url,
    {{ cast_to_boolean('is_you') }} as is_you,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(email as {{ dbt_utils.type_string() }}) as email,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('notes_user_ab1') }}
-- user at notes/user
where 1 = 1

