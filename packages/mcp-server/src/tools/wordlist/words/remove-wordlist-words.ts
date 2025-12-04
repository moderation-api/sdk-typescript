// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'wordlist.words',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/wordlist/{id}/words',
  operationId: 'wordlist-removeWords',
};

export const tool: Tool = {
  name: 'remove_wordlist_words',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove words from an existing wordlist\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/word_remove_response',\n  $defs: {\n    word_remove_response: {\n      type: 'object',\n      properties: {\n        removedCount: {\n          type: 'number',\n          description: 'Number of words removed'\n        },\n        removedWords: {\n          type: 'array',\n          description: 'List of words removed',\n          items: {\n            type: 'string'\n          }\n        },\n        totalCount: {\n          type: 'number',\n          description: 'Total number of words in wordlist'\n        }\n      },\n      required: [        'removedCount',\n        'removedWords',\n        'totalCount'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the wordlist to remove words from',
      },
      words: {
        type: 'array',
        description: 'Array of words to remove from the wordlist',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'words'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.wordlist.words.remove(id, body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
