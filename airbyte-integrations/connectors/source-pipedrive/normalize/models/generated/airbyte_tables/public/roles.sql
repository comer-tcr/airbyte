{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='roles_scd'
                        )
                    %}
                    {%
                        if scd_table_relation is not none
                    %}
                    {%
                            do adapter.drop_relation(scd_table_relation)
                    %}
                    {% endif %}
                        "],
    tags = [ "top-level" ]
) }}
-- Final base SQL model
-- depends_on: {{ ref('roles_ab3') }}
select
    {{ adapter.quote('level') }},
    {{ adapter.quote('name') }},
    description,
    active_flag,
    parent_role_id,
    {{ adapter.quote('id') }},
    assignment_count,
    sub_role_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_roles_hashid
from {{ ref('roles_ab3') }}
-- roles from {{ source('public', '_airbyte_raw_roles') }}
where 1 = 1

