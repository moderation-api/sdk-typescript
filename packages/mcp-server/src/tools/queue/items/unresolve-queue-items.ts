// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'queue.items',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/queue/{id}/items/{itemId}/unresolve',
  operationId: 'queueView-openUnresolveItem',
};

export const tool: Tool = {
  name: 'unresolve_queue_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMark a previously resolved queue item as unresolved/pending\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/item_unresolve_response',\n  $defs: {\n    item_unresolve_response: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'New status of the item'\n        },\n        success: {\n          type: 'boolean'\n        },\n        unresolvedAt: {\n          type: 'string',\n          description: 'Timestamp when the item was unresolved'\n        }\n      },\n      required: [        'status',\n        'success',\n        'unresolvedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The queue ID',
      },
      itemId: {
        type: 'string',
        description: 'The item ID to unresolve',
      },
      comment: {
        type: 'string',
        description: 'Optional reason for unresolving the item',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'itemId'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { itemId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.queue.items.unresolve(itemId, body)),
    );
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
