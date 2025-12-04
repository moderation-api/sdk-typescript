// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'actions.execute',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/actions/{actionId}/execute',
  operationId: 'actions-executeDeprecated',
};

export const tool: Tool = {
  name: 'execute_by_id_actions_execute',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExecute an action on a set of content items in a queue.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/execute_execute_by_id_response',\n  $defs: {\n    execute_execute_by_id_response: {\n      type: 'object',\n      properties: {\n        actionId: {\n          type: 'string',\n          description: 'The ID of the action.'\n        },\n        ids: {\n          type: 'array',\n          description: 'The IDs of the content items.',\n          items: {\n            type: 'string'\n          }\n        },\n        success: {\n          type: 'boolean',\n          description: 'Action executed successfully.'\n        }\n      },\n      required: [        'actionId',\n        'ids',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionId: {
        type: 'string',
        description: 'The ID or key of the action to execute.',
      },
      authorIds: {
        type: 'array',
        description: 'IDs of the authors to apply the action to',
        items: {
          type: 'string',
        },
      },
      contentIds: {
        type: 'array',
        description: 'The IDs of the content items to perform the action on.',
        items: {
          type: 'string',
        },
      },
      queueId: {
        type: 'string',
        description: 'The ID of the queue the action was performed from if any.',
      },
      value: {
        type: 'string',
        description: 'The value of the action. Useful to set a reason for the action etc.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['actionId'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { actionId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.actions.execute.executeByID(actionId, body)),
    );
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
