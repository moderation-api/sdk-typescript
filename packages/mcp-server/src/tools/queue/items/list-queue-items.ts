// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'queue.items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/queue/{id}/items',
  operationId: 'queueView-openGetItems',
};

export const tool: Tool = {
  name: 'list_queue_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet paginated list of items in a moderation queue with filtering options\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/item_list_response',\n  $defs: {\n    item_list_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Content ID'\n              },\n              content: {\n                type: 'string',\n                description: 'The content to be moderated'\n              },\n              flagged: {\n                type: 'boolean',\n                description: 'Whether the item is flagged by any label'\n              },\n              labels: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    flagged: {\n                      type: 'boolean',\n                      description: 'Whether this label caused a flag'\n                    },\n                    label: {\n                      type: 'string',\n                      description: 'Label name'\n                    },\n                    score: {\n                      type: 'number',\n                      description: 'Confidence score of the label'\n                    }\n                  },\n                  required: [                    'flagged',\n                    'label',\n                    'score'\n                  ]\n                }\n              },\n              status: {\n                type: 'string',\n                description: 'Status of the item',\n                enum: [                  'pending',\n                  'resolved'\n                ]\n              },\n              timestamp: {\n                type: 'number',\n                description: 'Unix timestamp of when the item was created'\n              },\n              actions: {\n                type: 'array',\n                description: 'Action IDs taken on this item',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'Action ID'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Action name'\n                    },\n                    timestamp: {\n                      type: 'number',\n                      description: 'Unix timestamp of when the action was taken'\n                    },\n                    comment: {\n                      type: 'string',\n                      description: 'Action comment'\n                    },\n                    reviewer: {\n                      type: 'string',\n                      description: 'Moderator userID'\n                    }\n                  },\n                  required: [                    'id',\n                    'name',\n                    'timestamp'\n                  ]\n                }\n              },\n              authorId: {\n                type: 'string',\n                description: 'Author ID'\n              },\n              contentType: {\n                type: 'string',\n                description: 'Type of the content object'\n              },\n              conversationId: {\n                type: 'string',\n                description: 'Conversation ID'\n              },\n              language: {\n                type: 'string',\n                description: 'Content language'\n              }\n            },\n            required: [              'id',\n              'content',\n              'flagged',\n              'labels',\n              'status',\n              'timestamp'\n            ]\n          }\n        },\n        pagination: {\n          type: 'object',\n          properties: {\n            currentPage: {\n              type: 'number'\n            },\n            hasNextPage: {\n              type: 'boolean'\n            },\n            hasPreviousPage: {\n              type: 'boolean'\n            },\n            totalItems: {\n              type: 'number'\n            },\n            totalPages: {\n              type: 'number'\n            }\n          },\n          required: [            'currentPage',\n            'hasNextPage',\n            'hasPreviousPage',\n            'totalItems',\n            'totalPages'\n          ]\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The queue ID',
      },
      afterDate: {
        type: 'string',
      },
      authorId: {
        type: 'string',
      },
      beforeDate: {
        type: 'string',
      },
      conversationIds: {
        type: 'string',
      },
      filteredActionIds: {
        type: 'string',
      },
      includeResolved: {
        type: 'string',
      },
      labels: {
        type: 'string',
      },
      pageNumber: {
        type: 'number',
        description: 'Page number to fetch',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page',
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction',
        enum: ['asc', 'desc'],
      },
      sortField: {
        type: 'string',
        enum: ['createdAt', 'severity', 'reviewedAt'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.queue.items.list(id, body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
