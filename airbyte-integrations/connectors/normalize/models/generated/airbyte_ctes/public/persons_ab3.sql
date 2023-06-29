{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('persons_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'related_closed_deals_count',
        'email_messages_count',
        'cc_email',
        'owner_id',
        'open_deals_count',
        'last_outgoing_mail_time',
        boolean_to_string('active_flag'),
        object_to_string('picture_id'),
        'last_activity_id',
        'next_activity_date',
        'update_time',
        'participant_open_deals_count',
        'activities_count',
        adapter.quote('id'),
        'org_name',
        'first_name',
        array_to_string('email'),
        'won_deals_count',
        'owner_name',
        'files_count',
        'company_id',
        'related_won_deals_count',
        'last_incoming_mail_time',
        'first_char',
        'undone_activities_count',
        'closed_deals_count',
        'last_name',
        'last_activity_date',
        adapter.quote('label'),
        'next_activity_id',
        'related_lost_deals_count',
        'related_open_deals_count',
        array_to_string('phone'),
        'visible_to',
        'org_id',
        'notes_count',
        'followers_count',
        adapter.quote('name'),
        'participant_closed_deals_count',
        'lost_deals_count',
        'next_activity_time',
        'add_time',
        'done_activities_count',
    ]) }} as _airbyte_persons_hashid,
    tmp.*
from {{ ref('persons_ab2') }} tmp
-- persons
where 1 = 1

