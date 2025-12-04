// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@moderation-api/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModerationAPI from '@moderation-api/sdk';

export const metadata: Metadata = {
  resource: 'content',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/moderate',
  operationId: 'newModerate-moderate',
};

export const tool: Tool = {
  name: 'submit_content',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        anyOf: [
          {
            type: 'object',
            title: 'Text',
            description: 'Text',
            properties: {
              text: {
                type: 'string',
                description: 'The content text',
              },
              type: {
                type: 'string',
                enum: ['text'],
              },
            },
            required: ['text', 'type'],
          },
          {
            type: 'object',
            title: 'Image',
            description: 'Image',
            properties: {
              type: {
                type: 'string',
                enum: ['image'],
              },
              url: {
                type: 'string',
                description: 'A public URL of the image content',
              },
            },
            required: ['type', 'url'],
          },
          {
            type: 'object',
            title: 'Video',
            description: 'Video',
            properties: {
              type: {
                type: 'string',
                enum: ['video'],
              },
              url: {
                type: 'string',
                description: 'A public URL of the video content',
              },
            },
            required: ['type', 'url'],
          },
          {
            type: 'object',
            title: 'Audio',
            description: 'Audio',
            properties: {
              type: {
                type: 'string',
                enum: ['audio'],
              },
              url: {
                type: 'string',
                description: 'The URL of the audio content',
              },
            },
            required: ['type', 'url'],
          },
          {
            type: 'object',
            title: 'Content node',
            description: 'Object',
            properties: {
              data: {
                type: 'object',
                description: 'Values in the object. Can be mixed content types.',
                additionalProperties: true,
              },
              type: {
                type: 'string',
                enum: ['object'],
              },
            },
            required: ['data', 'type'],
          },
        ],
        description: 'The content sent for moderation',
      },
      authorId: {
        type: 'string',
        description: 'The author of the content.',
      },
      channel: {
        type: 'string',
        description: "Provide a channel ID or key. Will use the project's default channel if not provided.",
      },
      contentId: {
        type: 'string',
        description: 'The unique ID of the content in your database.',
      },
      conversationId: {
        type: 'string',
        description: 'For example the ID of a chat room or a post',
      },
      doNotStore: {
        type: 'boolean',
        description: "Do not store the content. The content won't enter the review queue",
      },
      metadata: {
        type: 'object',
        description: 'Any metadata you want to store with the content',
        additionalProperties: true,
      },
      metaType: {
        type: 'string',
        description: 'The meta type of content being moderated',
        enum: ['profile', 'message', 'post', 'comment', 'event', 'product', 'review', 'other'],
      },
      policies: {
        type: 'array',
        description:
          'Optionally override the channel policies for this moderation request only (enterprise).',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Toxicity',
              properties: {
                id: {
                  type: 'string',
                  enum: ['toxicity'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Personal Information',
              properties: {
                id: {
                  type: 'string',
                  enum: ['personal_information'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Toxicity Severe',
              properties: {
                id: {
                  type: 'string',
                  enum: ['toxicity_severe'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Hate',
              properties: {
                id: {
                  type: 'string',
                  enum: ['hate'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit Drugs',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit_drugs'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit Alcohol',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit_alcohol'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit Firearms',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit_firearms'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit Tobacco',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit_tobacco'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Illicit Gambling',
              properties: {
                id: {
                  type: 'string',
                  enum: ['illicit_gambling'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Sexual',
              properties: {
                id: {
                  type: 'string',
                  enum: ['sexual'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Flirtation',
              properties: {
                id: {
                  type: 'string',
                  enum: ['flirtation'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Profanity',
              properties: {
                id: {
                  type: 'string',
                  enum: ['profanity'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Violence',
              properties: {
                id: {
                  type: 'string',
                  enum: ['violence'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Self Harm',
              properties: {
                id: {
                  type: 'string',
                  enum: ['self_harm'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Spam',
              properties: {
                id: {
                  type: 'string',
                  enum: ['spam'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Self Promotion',
              properties: {
                id: {
                  type: 'string',
                  enum: ['self_promotion'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Political',
              properties: {
                id: {
                  type: 'string',
                  enum: ['political'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Religion',
              properties: {
                id: {
                  type: 'string',
                  enum: ['religion'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'Code Abuse',
              properties: {
                id: {
                  type: 'string',
                  enum: ['code_abuse'],
                },
                flag: {
                  type: 'boolean',
                },
              },
              required: ['id', 'flag'],
            },
            {
              type: 'object',
              title: 'PII Masking',
              properties: {
                id: {
                  type: 'string',
                  enum: ['pii'],
                },
                entities: {
                  type: 'object',
                  additionalProperties: true,
                },
              },
              required: ['id', 'entities'],
            },
            {
              type: 'object',
              title: 'URL Masking',
              properties: {
                id: {
                  type: 'string',
                  enum: ['url'],
                },
                entities: {
                  type: 'object',
                  additionalProperties: true,
                },
              },
              required: ['id', 'entities'],
            },
            {
              type: 'object',
              title: 'Guideline',
              properties: {
                id: {
                  type: 'string',
                  enum: ['guideline'],
                },
                flag: {
                  type: 'boolean',
                },
                guidelineKey: {
                  type: 'string',
                },
                instructions: {
                  type: 'string',
                },
              },
              required: ['id', 'flag', 'guidelineKey', 'instructions'],
            },
          ],
        },
      },
    },
    required: ['content'],
  },
  annotations: {},
};

export const handler = async (client: ModerationAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.content.submit(body));
  } catch (error) {
    if (error instanceof ModerationAPI.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
