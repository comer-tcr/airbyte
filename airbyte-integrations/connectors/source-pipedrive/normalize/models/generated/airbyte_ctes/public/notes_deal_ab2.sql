{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('notes_deal_ab1') }}
select
    _airbyte_notes_hashid,
    cast(title as {{ dbt_utils.type_string() }}) as title,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('notes_deal_ab1') }}
-- deal at notes/deal
where 1 = 1

