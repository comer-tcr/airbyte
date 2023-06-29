{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='activities_attendees_scd'
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
    tags = [ "nested" ]
) }}
-- Final base SQL model
-- depends_on: {{ ref('activities_attendees_ab3') }}
select
    _airbyte_activities_hashid,
    email_address,
    user_id,
    {{ adapter.quote('name') }},
    is_organizer,
    status,
    person_id,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_attendees_hashid
from {{ ref('activities_attendees_ab3') }}
-- attendees at activities/attendees from {{ ref('activities') }}
where 1 = 1

