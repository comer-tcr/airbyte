{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "_airbyte_public",
    tags = [ "top-level-intermediate" ]
) }}
-- SQL model to build a hash column based on the values of this record
-- depends_on: {{ ref('files_ab2') }}
select
    {{ dbt_utils.surrogate_key([
        'description',
        'lead_name',
        boolean_to_string('active_flag'),
        's3_bucket',
        'update_time',
        boolean_to_string('inline_flag'),
        'file_type',
        'product_id',
        'activity_id',
        adapter.quote('id'),
        'people_name',
        'remote_location',
        'deal_id',
        'org_name',
        'mail_template_id',
        'lead_id',
        'person_id',
        'log_id',
        'file_name',
        'mail_message_id',
        'remote_id',
        'person_name',
        'product_name',
        'url',
        'file_size',
        'user_id',
        'org_id',
        'deal_name',
        adapter.quote('name'),
        'add_time',
        'cid',
    ]) }} as _airbyte_files_hashid,
    tmp.*
from {{ ref('files_ab2') }} tmp
-- files
where 1 = 1

