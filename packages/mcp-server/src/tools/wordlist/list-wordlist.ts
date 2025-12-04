// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'wordlist',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wordlist',
  operationId: 'wordlist-list',
};

export const tool: Tool = {
  name: 'list_wordlist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all wordlists for the authenticated organization\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/wordlist_list_response',\n  $defs: {\n    wordlist_list_response: {\n      type: 'array',\n      description: 'Array of wordlists',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier of the wordlist'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'When the wordlist was created'\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the wordlist'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the wordlist'\n          },\n          userId: {\n            type: 'string',\n            description: 'User who created the wordlist'\n          }\n        },\n        required: [          'id',\n          'createdAt',\n          'description',\n          'name',\n          'userId'\n        ]\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.wordlist.list()));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
