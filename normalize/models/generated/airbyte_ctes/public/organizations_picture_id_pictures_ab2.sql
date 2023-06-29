{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('organizations_picture_id_pictures_ab1') }}
select
    _airbyte_picture_id_hashid,
    cast({{ adapter.quote('512') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('512') }},
    cast({{ adapter.quote('128') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('128') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations_picture_id_pictures_ab1') }}
-- pictures at organizations/picture_id/pictures
where 1 = 1

