#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import launch
from source_ahgora_api import SourceAhgoraApi

if __name__ == "__main__":
    source = SourceAhgoraApi()
    launch(source, sys.argv[1:])
