// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account',
  operationId: 'account-get',
};

export const tool: Tool = {
  name: 'list_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet account details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_list_response',\n  $defs: {\n    account_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the account'\n        },\n        paid_plan_name: {\n          type: 'string',\n          description: 'Name of the paid plan'\n        },\n        remaining_quota: {\n          type: 'number',\n          description: 'Remaining quota'\n        },\n        text_api_quota: {\n          type: 'number',\n          description: 'Text API quota'\n        },\n        current_project: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of the current project'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the current project'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        }\n      },\n      required: [        'id',\n        'paid_plan_name',\n        'remaining_quota',\n        'text_api_quota'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.account.list()));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
