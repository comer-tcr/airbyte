{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('products_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'code',
        'owner_name',
        'files_count',
        'owner_id',
        'first_char',
        boolean_to_string('selectable'),
        'description',
        'tax',
        boolean_to_string('active_flag'),
        'unit',
        'update_time',
        'visible_to',
        'followers_count',
        adapter.quote('name'),
        adapter.quote('id'),
        array_to_string('prices'),
        'category',
        'add_time',
    ]) }} as _airbyte_products_hashid,
    tmp.*
from {{ ref('products_ab2') }} tmp
-- products
where 1 = 1

