{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('activities_file_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        '_airbyte_activities_hashid',
        adapter.quote('id'),
        'clean_name',
        'url',
    ]) }} as _airbyte_file_hashid,
    tmp.*
from {{ ref('activities_file_ab2') }} tmp
-- file at activities/file
where 1 = 1

