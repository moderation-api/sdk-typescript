// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/actions',
  operationId: 'actions-create',
};

export const tool: Tool = {
  name: 'create_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an action.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_create_response',\n  $defs: {\n    action_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the action.'\n        },\n        builtIn: {\n          type: 'boolean',\n          description: 'Whether the action is a built-in action or a custom one.'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'The date the action was created.'\n        },\n        filterInQueueIds: {\n          type: 'array',\n          description: 'The IDs of the queues the action is available in.',\n          items: {\n            type: 'string'\n          }\n        },\n        freeText: {\n          type: 'boolean',\n          description: 'Whether the action allows any text to be entered as a value or if it must be one of the possible values.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the action.'\n        },\n        position: {\n          type: 'string',\n          description: 'Show the action in all queues, selected queues or no queues (to use via API only).',\n          enum: [            'ALL_QUEUES',\n            'SOME_QUEUES',\n            'HIDDEN'\n          ]\n        },\n        possibleValues: {\n          type: 'array',\n          description: 'The possible values of the action. The user will be prompted to select one of these values when executing the action.',\n          items: {\n            type: 'object',\n            properties: {\n              value: {\n                type: 'string',\n                description: 'The value of the action.'\n              }\n            },\n            required: [              'value'\n            ]\n          }\n        },\n        queueBehaviour: {\n          type: 'string',\n          description: 'Whether the action resolves and removes the item, unresolves and re-add it to the queue, or does not change the resolve status.',\n          enum: [            'REMOVE',\n            'ADD',\n            'NO_CHANGE'\n          ]\n        },\n        valueRequired: {\n          type: 'boolean',\n          description: 'Whether the action requires a value to be executed.'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the action.'\n        },\n        key: {\n          type: 'string',\n          description: 'User defined key of the action.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of the action.',\n          enum: [            'AUTHOR_BLOCK',\n            'AUTHOR_BLOCK_TEMP',\n            'AUTHOR_UNBLOCK',\n            'AUTHOR_DELETE',\n            'AUTHOR_REPORT',\n            'AUTHOR_WARN',\n            'AUTHOR_CUSTOM',\n            'ITEM_REJECT',\n            'ITEM_ALLOW',\n            'ITEM_CUSTOM'\n          ]\n        }\n      },\n      required: [        'id',\n        'builtIn',\n        'createdAt',\n        'filterInQueueIds',\n        'freeText',\n        'name',\n        'position',\n        'possibleValues',\n        'queueBehaviour',\n        'valueRequired'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the action.',
      },
      builtIn: {
        type: 'boolean',
        description: 'Whether the action is a built-in action or a custom one.',
      },
      description: {
        type: 'string',
        description: 'The description of the action.',
      },
      filterInQueueIds: {
        type: 'array',
        description: 'The IDs of the queues the action is available in.',
        items: {
          type: 'string',
        },
      },
      freeText: {
        type: 'boolean',
        description:
          'Whether the action allows any text to be entered as a value or if it must be one of the possible values.',
      },
      key: {
        type: 'string',
        description: 'User defined key of the action.',
      },
      position: {
        type: 'string',
        description: 'Show the action in all queues, selected queues or no queues (to use via API only).',
        enum: ['ALL_QUEUES', 'SOME_QUEUES', 'HIDDEN'],
      },
      possibleValues: {
        type: 'array',
        description:
          'The possible values of the action. The user will be prompted to select one of these values when executing the action.',
        items: {
          type: 'object',
          properties: {
            value: {
              type: 'string',
              description: 'The value of the action.',
            },
          },
          required: ['value'],
        },
      },
      queueBehaviour: {
        type: 'string',
        description:
          'Whether the action resolves and removes the item, unresolves and re-add it to the queue, or does not change the resolve status.',
        enum: ['REMOVE', 'ADD', 'NO_CHANGE'],
      },
      type: {
        type: 'string',
        description: 'The type of the action.',
        enum: [
          'AUTHOR_BLOCK',
          'AUTHOR_BLOCK_TEMP',
          'AUTHOR_UNBLOCK',
          'AUTHOR_DELETE',
          'AUTHOR_REPORT',
          'AUTHOR_WARN',
          'AUTHOR_CUSTOM',
          'ITEM_REJECT',
          'ITEM_ALLOW',
          'ITEM_CUSTOM',
        ],
      },
      valueRequired: {
        type: 'boolean',
        description: 'Whether the action requires a value to be executed.',
      },
      webhooks: {
        type: 'array',
        description: "The action's webhooks.",
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: "The webhook's name, used to identify it in the dashboard",
            },
            url: {
              type: 'string',
              description: "The webhook's URL. We'll call this URL when the event occurs.",
            },
            id: {
              type: 'string',
              description: 'ID of an existing webhook or undefined if this is a new webhook.',
            },
            description: {
              type: 'string',
              description: "The webhook's description",
            },
          },
          required: ['name', 'url'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.actions.create(body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
