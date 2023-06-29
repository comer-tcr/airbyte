{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('notes_user_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_notes_hashid',
        'icon_url',
        boolean_to_string('is_you'),
        adapter.quote('name'),
        'email',
    ]) }} as _airbyte_user_hashid,
    tmp.*
from {{ ref('notes_user_ab2') }} tmp
-- user at notes/user
where 1 = 1

