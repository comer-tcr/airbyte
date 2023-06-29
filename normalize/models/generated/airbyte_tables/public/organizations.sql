{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='organizations_scd'
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
-- depends_on: {{ ref('organizations_ab3') }}
select
    address_route,
    related_closed_deals_count,
    email_messages_count,
    cc_email,
    owner_id,
    open_deals_count,
    active_flag,
    picture_id,
    people_count,
    last_activity_id,
    next_activity_date,
    update_time,
    activities_count,
    {{ adapter.quote('id') }},
    address_admin_area_level_2,
    won_deals_count,
    address_admin_area_level_1,
    address_street_number,
    address,
    owner_name,
    files_count,
    company_id,
    address_formatted_address,
    address_postal_code,
    related_won_deals_count,
    address_country,
    first_char,
    undone_activities_count,
    closed_deals_count,
    address_subpremise,
    last_activity_date,
    {{ adapter.quote('label') }},
    next_activity_id,
    related_lost_deals_count,
    related_open_deals_count,
    country_code,
    visible_to,
    notes_count,
    followers_count,
    {{ adapter.quote('name') }},
    address_locality,
    address_sublocality,
    lost_deals_count,
    next_activity_time,
    add_time,
    done_activities_count,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_organizations_hashid
from {{ ref('organizations_ab3') }}
-- organizations from {{ source('public', '_airbyte_raw_organizations') }}
where 1 = 1

