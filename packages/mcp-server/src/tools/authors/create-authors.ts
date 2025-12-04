// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@moderation-api/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'authors',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/authors',
  operationId: 'author-openCreate',
};

export const tool: Tool = {
  name: 'create_authors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new author. Typically not needed as authors are created automatically when content is moderated.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/author_create_response',\n  $defs: {\n    author_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Author ID in Moderation API'\n        },\n        block: {\n          type: 'object',\n          description: 'Block or suspension details, if applicable. Null if the author is enabled.',\n          properties: {\n            reason: {\n              type: 'string',\n              description: 'The moderators reason why the author was blocked or suspended.'\n            },\n            until: {\n              type: 'number',\n              description: 'The timestamp until which they are blocked if the author is suspended.'\n            }\n          }\n        },\n        first_seen: {\n          type: 'number',\n          description: 'Timestamp when author first appeared'\n        },\n        last_seen: {\n          type: 'number',\n          description: 'Timestamp of last activity'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional metadata provided by your system. We recommend including any relevant information that may assist in the moderation process.',\n          properties: {\n            email_verified: {\n              type: 'boolean',\n              description: 'Whether the author\\'s email is verified'\n            },\n            identity_verified: {\n              type: 'boolean',\n              description: 'Whether the author\\'s identity is verified'\n            },\n            is_paying_customer: {\n              type: 'boolean',\n              description: 'Whether the author is a paying customer'\n            },\n            phone_verified: {\n              type: 'boolean',\n              description: 'Whether the author\\'s phone number is verified'\n            }\n          }\n        },\n        metrics: {\n          type: 'object',\n          properties: {\n            flagged_content: {\n              type: 'number',\n              description: 'Number of flagged content pieces'\n            },\n            total_content: {\n              type: 'number',\n              description: 'Total pieces of content'\n            },\n            average_sentiment: {\n              type: 'number',\n              description: 'Average sentiment score of content (-1 to 1). Requires a sentiment model in your project.'\n            }\n          },\n          required: [            'flagged_content',\n            'total_content'\n          ]\n        },\n        risk_evaluation: {\n          type: 'object',\n          description: 'Risk assessment details, if available.',\n          properties: {\n            risk_level: {\n              type: 'number',\n              description: 'Calculated risk level based on more than 10 behavioral signals.'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Current author status',\n          enum: [            'enabled',\n            'suspended',\n            'blocked'\n          ]\n        },\n        trust_level: {\n          type: 'object',\n          properties: {\n            level: {\n              type: 'number',\n              description: 'Author trust level (-1, 0, 1, 2, 3, or 4)'\n            },\n            manual: {\n              type: 'boolean',\n              description: 'True if the trust level was set manually by a moderator'\n            }\n          },\n          required: [            'level',\n            'manual'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Author email address'\n        },\n        external_id: {\n          type: 'string',\n          description: 'The author\\'s ID from your system'\n        },\n        external_link: {\n          type: 'string',\n          description: 'URL of the author\\'s external profile'\n        },\n        last_incident: {\n          type: 'number',\n          description: 'Timestamp of last incident'\n        },\n        name: {\n          type: 'string',\n          description: 'Author name or identifier'\n        },\n        profile_picture: {\n          type: 'string',\n          description: 'URL of the author\\'s profile picture'\n        }\n      },\n      required: [        'id',\n        'block',\n        'first_seen',\n        'last_seen',\n        'metadata',\n        'metrics',\n        'risk_evaluation',\n        'status',\n        'trust_level'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'External ID of the user, typically the ID of the author in your database.',
      },
      email: {
        type: 'string',
        description: 'Author email address',
      },
      external_link: {
        type: 'string',
        description: "URL of the author's external profile",
      },
      first_seen: {
        type: 'number',
        description: 'Timestamp when author first appeared',
      },
      last_seen: {
        type: 'number',
        description: 'Timestamp of last activity',
      },
      manual_trust_level: {
        type: 'number',
      },
      metadata: {
        type: 'object',
        description:
          'Additional metadata provided by your system. We recommend including any relevant information that may assist in the moderation process.',
        properties: {
          email_verified: {
            type: 'boolean',
            description: "Whether the author's email is verified",
          },
          identity_verified: {
            type: 'boolean',
            description: "Whether the author's identity is verified",
          },
          is_paying_customer: {
            type: 'boolean',
            description: 'Whether the author is a paying customer',
          },
          phone_verified: {
            type: 'boolean',
            description: "Whether the author's phone number is verified",
          },
        },
      },
      name: {
        type: 'string',
        description: 'Author name or identifier',
      },
      profile_picture: {
        type: 'string',
        description: "URL of the author's profile picture",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['external_id'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.authors.create(body)));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
