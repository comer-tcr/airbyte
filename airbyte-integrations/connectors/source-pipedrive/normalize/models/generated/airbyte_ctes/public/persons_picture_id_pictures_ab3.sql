{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('persons_picture_id_pictures_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_picture_id_hashid',
        adapter.quote('512'),
        adapter.quote('128'),
    ]) }} as _airbyte_pictures_hashid,
    tmp.*
from {{ ref('persons_picture_id_pictures_ab2') }} tmp
-- pictures at persons/picture_id/pictures
where 1 = 1

