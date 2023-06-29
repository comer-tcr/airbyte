{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('person_fields_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        boolean_to_string('bulk_edit_allowed'),
        boolean_to_string('edit_flag'),
        boolean_to_string('add_visible_flag'),
        'order_nr',
        boolean_to_string('active_flag'),
        boolean_to_string('index_visible_flag'),
        boolean_to_string('mandatory_flag'),
        boolean_to_string('filtering_allowed'),
        'update_time',
        boolean_to_string('details_visible_flag'),
        boolean_to_string('sortable_flag'),
        boolean_to_string('searchable_flag'),
        adapter.quote('name'),
        array_to_string(adapter.quote('options')),
        'last_updated_by_user_id',
        adapter.quote('id'),
        'add_time',
        'field_type',
        adapter.quote('key'),
        boolean_to_string('important_flag'),
    ]) }} as _airbyte_person_fields_hashid,
    tmp.*
from {{ ref('person_fields_ab2') }} tmp
-- person_fields
where 1 = 1

