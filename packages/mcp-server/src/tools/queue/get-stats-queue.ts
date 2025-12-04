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
  httpPath: '/queue/{id}/stats',
  operationId: 'queueView-openGetStats',
};

export const tool: Tool = {
  name: 'get_stats_queue',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet detailed statistics about a moderation queue including review times, action counts, and trends\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/queue_get_stats_response',\n  $defs: {\n    queue_get_stats_response: {\n      type: 'object',\n      properties: {\n        actionStats: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              actionId: {\n                type: 'string',\n                description: 'ID of the moderation action'\n              },\n              actionName: {\n                type: 'string',\n                description: 'Name of the moderation action'\n              },\n              count: {\n                type: 'number',\n                description: 'Number of times this action was taken'\n              },\n              percentageOfTotal: {\n                type: 'number',\n                description: 'Percentage this action represents of all actions'\n              }\n            },\n            required: [              'actionId',\n              'actionName',\n              'count',\n              'percentageOfTotal'\n            ]\n          }\n        },\n        reviewStats: {\n          type: 'object',\n          properties: {\n            averageTimeToReview: {\n              type: 'number',\n              description: 'Average time in milliseconds to review an item'\n            },\n            totalPending: {\n              type: 'number',\n              description: 'Total number of items pending review'\n            },\n            totalReviewed: {\n              type: 'number',\n              description: 'Total number of items reviewed'\n            }\n          },\n          required: [            'averageTimeToReview',\n            'totalPending',\n            'totalReviewed'\n          ]\n        },\n        topReviewers: {\n          type: 'array',\n          description: 'List of top reviewers and their statistics',\n          items: {\n            type: 'object',\n            properties: {\n              averageTimePerReview: {\n                type: 'number',\n                description: 'Average review time in milliseconds'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the reviewer'\n              },\n              reviewCount: {\n                type: 'number',\n                description: 'Number of items reviewed'\n              },\n              topActions: {\n                type: 'array',\n                description: 'Most common actions taken by this reviewer',\n                items: {\n                  type: 'object',\n                  properties: {\n                    actionId: {\n                      type: 'string',\n                      description: 'Most used action by this reviewer'\n                    },\n                    actionName: {\n                      type: 'string',\n                      description: 'Name of the most used action'\n                    },\n                    count: {\n                      type: 'number',\n                      description: 'Number of times this action was used'\n                    }\n                  },\n                  required: [                    'actionId',\n                    'actionName',\n                    'count'\n                  ]\n                }\n              },\n              userId: {\n                type: 'string',\n                description: 'ID of the reviewer'\n              },\n              accuracyScore: {\n                type: 'number',\n                description: 'Optional accuracy score based on review quality metrics'\n              }\n            },\n            required: [              'averageTimePerReview',\n              'name',\n              'reviewCount',\n              'topActions',\n              'userId'\n            ]\n          }\n        },\n        trends: {\n          type: 'object',\n          properties: {\n            dailyReviewCounts: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  count: {\n                    type: 'number',\n                    description: 'Number of reviews on this date'\n                  },\n                  date: {\n                    type: 'string',\n                    description: 'Date in YYYY-MM-DD format'\n                  }\n                },\n                required: [                  'count',\n                  'date'\n                ]\n              }\n            },\n            flaggedContentTrends: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  label: {\n                    type: 'string',\n                    description: 'Content flag/label'\n                  },\n                  trend: {\n                    type: 'number',\n                    description: 'Trend indicator (-1 to 1) showing if this type of flagged content is increasing or decreasing'\n                  }\n                },\n                required: [                  'label',\n                  'trend'\n                ]\n              }\n            }\n          },\n          required: [            'dailyReviewCounts',\n            'flaggedContentTrends'\n          ]\n        }\n      },\n      required: [        'actionStats',\n        'reviewStats',\n        'topReviewers',\n        'trends'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The queue ID',
      },
      withinDays: {
        type: 'string',
        description: 'Number of days to analyze statistics for',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.queue.getStats(id, body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
