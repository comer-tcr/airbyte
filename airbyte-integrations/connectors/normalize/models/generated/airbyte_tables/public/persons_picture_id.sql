{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='persons_picture_id_scd'
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
-- depends_on: {{ ref('persons_picture_id_ab3') }}
select
    _airbyte_persons_hashid,
    update_time,
    added_by_user_id,
    item_id,
    item_type,
    active_flag,
    {{ adapter.quote('value') }},
    add_time,
    pictures,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_picture_id_hashid
from {{ ref('persons_picture_id_ab3') }}
-- picture_id at persons/picture_id from {{ ref('persons') }}
where 1 = 1

