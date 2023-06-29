{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type
-- depends_on: {{ ref('stages_ab1') }}
select
    cast({{ empty_string_to_null('update_time') }} as {{ type_timestamp_without_timezone() }}) as update_time,
    {{ cast_to_boolean('pipeline_deal_probability') }} as pipeline_deal_probability,
    cast(order_nr as {{ dbt_utils.type_bigint() }}) as order_nr,
    cast({{ adapter.quote('name') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('name') }},
    cast(pipeline_id as {{ dbt_utils.type_bigint() }}) as pipeline_id,
    cast(deal_probability as {{ dbt_utils.type_bigint() }}) as deal_probability,
    {{ cast_to_boolean('active_flag') }} as active_flag,
    {{ cast_to_boolean('rotten_flag') }} as rotten_flag,
    cast({{ adapter.quote('id') }} as {{ dbt_utils.type_bigint() }}) as {{ adapter.quote('id') }},
    cast(add_time as {{ dbt_utils.type_string() }}) as add_time,
    cast(rotten_days as {{ dbt_utils.type_bigint() }}) as rotten_days,
    cast(pipeline_name as {{ dbt_utils.type_string() }}) as pipeline_name,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('stages_ab1') }}
-- stages
where 1 = 1

