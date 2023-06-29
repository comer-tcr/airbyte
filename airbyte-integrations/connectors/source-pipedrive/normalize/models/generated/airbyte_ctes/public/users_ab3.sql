{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('users_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'icon_url',
        boolean_to_string('is_you'),
        'signup_flow_variation',
        'created',
        'last_login',
        'timezone_offset',
        boolean_to_string('active_flag'),
        'locale',
        'is_admin',
        'phone',
        'role_id',
        adapter.quote('name'),
        'timezone_name',
        'modified',
        adapter.quote('id'),
        boolean_to_string('has_created_company'),
        'lang',
        'default_currency',
        'email',
        boolean_to_string('activated'),
    ]) }} as _airbyte_users_hashid,
    tmp.*
from {{ ref('users_ab2') }} tmp
-- users
where 1 = 1

