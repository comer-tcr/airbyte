{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('deals_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'email_messages_count',
        'cc_email',
        'products_count',
        'next_activity_date',
        'next_activity_type',
        'next_activity_duration',
        adapter.quote('id'),
        'person_id',
        'expected_close_date',
        'owner_name',
        'participants_count',
        'stage_id',
        'probability',
        'undone_activities_count',
        boolean_to_string('active'),
        'person_name',
        'last_activity_date',
        'close_time',
        boolean_to_string('org_hidden'),
        'next_activity_id',
        'weighted_value_currency',
        'stage_order_nr',
        'next_activity_subject',
        'rotten_time',
        'user_id',
        'visible_to',
        'org_id',
        'notes_count',
        'next_activity_time',
        'formatted_value',
        'status',
        'formatted_weighted_value',
        'first_won_time',
        'last_outgoing_mail_time',
        'title',
        'last_activity_id',
        'update_time',
        'activities_count',
        'pipeline_id',
        'lost_time',
        'currency',
        'weighted_value',
        'org_name',
        adapter.quote('value'),
        boolean_to_string('person_hidden'),
        'next_activity_note',
        'files_count',
        'last_incoming_mail_time',
        'remote_id',
        adapter.quote('label'),
        'lost_reason',
        boolean_to_string('deleted'),
        'won_time',
        'followers_count',
        'stage_change_time',
        'add_time',
        'done_activities_count',
    ]) }} as _airbyte_deals_hashid,
    tmp.*
from {{ ref('deals_ab2') }} tmp
-- deals
where 1 = 1

