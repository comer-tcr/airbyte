{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='users_scd'
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
-- depends_on: {{ ref('users_ab3') }}
select
    icon_url,
    is_you,
    signup_flow_variation,
    created,
    last_login,
    timezone_offset,
    active_flag,
    locale,
    is_admin,
    phone,
    role_id,
    {{ adapter.quote('name') }},
    timezone_name,
    modified,
    {{ adapter.quote('id') }},
    has_created_company,
    lang,
    default_currency,
    email,
    activated,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_users_hashid
from {{ ref('users_ab3') }}
-- users from {{ source('public', '_airbyte_raw_users') }}
where 1 = 1

