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
  httpPath: '/wordlist/{id}',
  operationId: 'wordlist-getWordlistPublic',
};

export const tool: Tool = {
  name: 'retrieve_wordlist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a specific wordlist by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/wordlist_retrieve_response',\n  $defs: {\n    wordlist_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the wordlist'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Creation date of the wordlist'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the wordlist'\n        },\n        organizationId: {\n          type: 'string',\n          description: 'ID of the organization'\n        },\n        strict: {\n          type: 'boolean',\n          description: 'Strict mode'\n        },\n        userId: {\n          type: 'string',\n          description: 'ID of the user'\n        },\n        words: {\n          type: 'array',\n          description: 'Words in the wordlist',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'name',\n        'organizationId',\n        'strict',\n        'userId',\n        'words'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the wordlist to get',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.wordlist.retrieve(id)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
