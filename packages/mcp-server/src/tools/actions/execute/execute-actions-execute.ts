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
  httpPath: '/actions/execute',
  operationId: 'actions-execute',
};

export const tool: Tool = {
  name: 'execute_actions_execute',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExecute a moderation action on one or more content items.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/execute_execute_response',\n  $defs: {\n    execute_execute_response: {\n      type: 'object',\n      description: 'Execution result',\n      properties: {\n        success: {\n          type: 'boolean',\n          description: 'Whether the action was executed successfully'\n        }\n      },\n      required: [        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionKey: {
        type: 'string',
        description: 'ID or key of the action to execute',
      },
      authorIds: {
        type: 'array',
        description: 'IDs of the authors to apply the action to. Provide this or contentIds.',
        items: {
          type: 'string',
        },
      },
      contentIds: {
        type: 'array',
        description: 'IDs of the content items to apply the action to. Provide this or authorIds.',
        items: {
          type: 'string',
        },
      },
      duration: {
        type: 'number',
        description: 'Optional duration in milliseconds for actions with timeouts',
      },
      queueId: {
        type: 'string',
        description: 'Optional queue ID if the action is queue-specific',
      },
      value: {
        type: 'string',
        description: 'Optional value to provide with the action',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['actionKey'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.actions.execute.execute(body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
