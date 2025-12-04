// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'queue',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/queue/{id}',
  operationId: 'queueView-openGetQueue',
};

export const tool: Tool = {
  name: 'retrieve_queue',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a queue\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/queue_retrieve_response',\n  $defs: {\n    queue_retrieve_response: {\n      type: 'object',\n      properties: {\n        queue: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            description: {\n              type: 'string'\n            },\n            filter: {\n              type: 'object',\n              properties: {\n                afterDate: {\n                  type: 'string'\n                },\n                authorID: {\n                  type: 'string'\n                },\n                beforeDate: {\n                  type: 'string'\n                },\n                conversationIds: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                filteredActionIds: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                filteredChannelIds: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                filterLabels: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      label: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'FLAGGED',\n                          'NOT_FLAGGED',\n                          'THRESHOLDS'\n                        ]\n                      },\n                      maxThreshold: {\n                        type: 'number'\n                      },\n                      minThreshold: {\n                        type: 'number'\n                      }\n                    },\n                    required: [                      'label',\n                      'type'\n                    ]\n                  }\n                },\n                labels: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                recommendationActions: {\n                  type: 'array',\n                  items: {\n                    type: 'string',\n                    enum: [                      'review',\n                      'allow',\n                      'reject'\n                    ]\n                  }\n                },\n                showChecked: {\n                  type: 'boolean'\n                }\n              }\n            },\n            name: {\n              type: 'string'\n            },\n            resolvedItemsCount: {\n              type: 'number'\n            },\n            totalItemsCount: {\n              type: 'number'\n            },\n            unresolvedItemsCount: {\n              type: 'number'\n            }\n          },\n          required: [            'id',\n            'description',\n            'filter',\n            'name',\n            'resolvedItemsCount',\n            'totalItemsCount',\n            'unresolvedItemsCount'\n          ]\n        }\n      },\n      required: [        'queue'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The queue ID',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.queue.retrieve(id)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
