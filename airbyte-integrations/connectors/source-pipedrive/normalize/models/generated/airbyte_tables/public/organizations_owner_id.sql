{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='organizations_owner_id_scd'
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
-- depends_on: {{ ref('organizations_owner_id_ab3') }}
select
    _airbyte_organizations_hashid,
    {{ adapter.quote('name') }},
    has_pic,
    active_flag,
    {{ adapter.quote('id') }},
    {{ adapter.quote('value') }},
    email,
    pic_hash,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_owner_id_hashid
from {{ ref('organizations_owner_id_ab3') }}
-- owner_id at organizations/owner_id from {{ ref('organizations') }}
where 1 = 1

