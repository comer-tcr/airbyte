{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('leads_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'expected_close_date',
        'owner_id',
        array_to_string('label_ids'),
        boolean_to_string('was_seen'),
        'title',
        'next_activity_id',
        'update_time',
        boolean_to_string('is_archived'),
        'organization_id',
        'creator_id',
        adapter.quote('id'),
        object_to_string(adapter.quote('value')),
        'add_time',
        'source_name',
        'person_id',
    ]) }} as _airbyte_leads_hashid,
    tmp.*
from {{ ref('leads_ab2') }} tmp
-- leads
where 1 = 1

