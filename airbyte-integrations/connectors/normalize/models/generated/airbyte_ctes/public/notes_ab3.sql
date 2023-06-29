{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('notes_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        object_to_string('deal'),
        boolean_to_string('active_flag'),
        'last_update_user_id',
        boolean_to_string('pinned_to_person_flag'),
        object_to_string(adapter.quote('lead')),
        adapter.quote('content'),
        boolean_to_string('pinned_to_deal_flag'),
        'update_time',
        boolean_to_string('pinned_to_organization_flag'),
        'user_id',
        'org_id',
        object_to_string('person'),
        object_to_string('organization'),
        adapter.quote('id'),
        boolean_to_string('pinned_to_lead_flag'),
        'deal_id',
        object_to_string(adapter.quote('user')),
        'add_time',
        'lead_id',
        'person_id',
    ]) }} as _airbyte_notes_hashid,
    tmp.*
from {{ ref('notes_ab2') }} tmp
-- notes
where 1 = 1

