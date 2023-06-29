{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    schema = "_airbyte_public",
    tags = [ "nested-intermediate" ]
) }}
-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema
-- depends_on: {{ ref('organizations_picture_id') }}
select
    _airbyte_picture_id_hashid,
    {{ json_extract_scalar('pictures', ['512'], ['512']) }} as {{ adapter.quote('512') }},
    {{ json_extract_scalar('pictures', ['128'], ['128']) }} as {{ adapter.quote('128') }},
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at
from {{ ref('organizations_picture_id') }} as table_alias
-- pictures at organizations/picture_id/pictures
where 1 = 1
and pictures is not null

