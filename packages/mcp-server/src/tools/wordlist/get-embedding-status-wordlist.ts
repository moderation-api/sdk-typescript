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
  httpPath: '/wordlist/{id}/embedding-status',
  operationId: 'wordlist-wordlistEmbeddingStatus',
};

export const tool: Tool = {
  name: 'get_embedding_status_wordlist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the current embedding progress status for a wordlist\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/wordlist_get_embedding_status_response',\n  $defs: {\n    wordlist_get_embedding_status_response: {\n      type: 'object',\n      description: 'Embedding status details',\n      properties: {\n        progress: {\n          type: 'number',\n          description: 'Percentage of words that have been embedded (0-100)'\n        },\n        remainingWords: {\n          type: 'number',\n          description: 'Number of words still waiting to be embedded'\n        },\n        totalWords: {\n          type: 'number',\n          description: 'Total number of words in the wordlist'\n        }\n      },\n      required: [        'progress',\n        'remainingWords',\n        'totalWords'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the wordlist to check embedding status for',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.wordlist.getEmbeddingStatus(id)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
