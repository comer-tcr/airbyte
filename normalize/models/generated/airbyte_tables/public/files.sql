{{ config(
    indexes = [{'columns':['_airbyte_emitted_at'],'type':'btree'}],
    unique_key = '_airbyte_ab_id',
    schema = "public",
    post_hook = ["
                    {%
                        set scd_table_relation = adapter.get_relation(
                            database=this.database,
                            schema=this.schema,
                            identifier='files_scd'
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
-- depends_on: {{ ref('files_ab3') }}
select
    description,
    lead_name,
    active_flag,
    s3_bucket,
    update_time,
    inline_flag,
    file_type,
    product_id,
    activity_id,
    {{ adapter.quote('id') }},
    people_name,
    remote_location,
    deal_id,
    org_name,
    mail_template_id,
    lead_id,
    person_id,
    log_id,
    file_name,
    mail_message_id,
    remote_id,
    person_name,
    product_name,
    url,
    file_size,
    user_id,
    org_id,
    deal_name,
    {{ adapter.quote('name') }},
    add_time,
    cid,
    _airbyte_ab_id,
    _airbyte_emitted_at,
    {{ current_timestamp() }} as _airbyte_normalized_at,
    _airbyte_files_hashid
from {{ ref('files_ab3') }}
-- files from {{ source('public', '_airbyte_raw_files') }}
where 1 = 1

