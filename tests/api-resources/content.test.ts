// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.content.submit({ content: { text: 'x', type: 'text' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.content.submit({
      content: { text: 'x', type: 'text' },
      authorId: 'authorId',
      channel: 'channel',
      contentId: 'contentId',
      conversationId: 'conversationId',
      doNotStore: true,
      metadata: { foo: 'bar' },
      metaType: 'profile',
      policies: [{ id: 'toxicity', flag: true }],
    });
  });
});
