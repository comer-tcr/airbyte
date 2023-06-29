{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='persons_picture_id_pictures_scd'
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
-- depends_on: {{ ref('persons_picture_id_pictures_ab3') }}
select
    _airbyte_picture_id_hashid,
    {{ adapter.quote('512') }},
    {{ adapter.quote('128') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_pictures_hashid
from {{ ref('persons_picture_id_pictures_ab3') }}
-- pictures at persons/picture_id/pictures from {{ ref('persons_picture_id') }}
where 1 = 1

