{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('organizations_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'address_route',
        'related_closed_deals_count',
        'email_messages_count',
        'cc_email',
        object_to_string('owner_id'),
        'open_deals_count',
        boolean_to_string('active_flag'),
        object_to_string('picture_id'),
        'people_count',
        'last_activity_id',
        'next_activity_date',
        'update_time',
        'activities_count',
        adapter.quote('id'),
        'address_admin_area_level_2',
        'won_deals_count',
        'address_admin_area_level_1',
        'address_street_number',
        'address',
        'owner_name',
        'files_count',
        'company_id',
        'address_formatted_address',
        'address_postal_code',
        'related_won_deals_count',
        'address_country',
        'first_char',
        'undone_activities_count',
        'closed_deals_count',
        'address_subpremise',
        'last_activity_date',
        adapter.quote('label'),
        'next_activity_id',
        'related_lost_deals_count',
        'related_open_deals_count',
        'country_code',
        'visible_to',
        'notes_count',
        'followers_count',
        adapter.quote('name'),
        'address_locality',
        'address_sublocality',
        'lost_deals_count',
        'next_activity_time',
        'add_time',
        'done_activities_count',
    ]) }} as _airbyte_organizations_hashid,
    tmp.*
from {{ ref('organizations_ab2') }} tmp
-- organizations
where 1 = 1

