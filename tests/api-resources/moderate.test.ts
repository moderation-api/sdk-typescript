// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModerationAPI from 'moderation-api';

const client = new ModerationAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource moderate', () => {
  // Prism tests are disabled
  test.skip('analyze: only required params', async () => {
    const responsePromise = client.moderate.analyze({ content: { text: 'x', type: 'text' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyze: required and optional params', async () => {
    const response = await client.moderate.analyze({
      content: { text: 'x', type: 'text' },
      authorId: 'authorId',
      channel: 'channel',
      contentId: 'contentId',
      conversationId: 'conversationId',
      doNotStore: true,
      metadata: { foo: 'bar' },
      metaType: 'profile',
    });
  });

  // Prism tests are disabled
  test.skip('analyzeAudio: only required params', async () => {
    const responsePromise = client.moderate.analyzeAudio({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyzeAudio: required and optional params', async () => {
    const response = await client.moderate.analyzeAudio({
      url: 'https://example.com',
      authorId: 'authorId',
      channelKey: 'channelKey',
      contentId: 'x',
      contextId: 'contextId',
      doNotStore: true,
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('analyzeImage: only required params', async () => {
    const responsePromise = client.moderate.analyzeImage({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyzeImage: required and optional params', async () => {
    const response = await client.moderate.analyzeImage({
      url: 'https://example.com',
      authorId: 'authorId',
      channelKey: 'channelKey',
      contentId: 'x',
      contextId: 'contextId',
      doNotStore: true,
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('analyzeObject: only required params', async () => {
    const responsePromise = client.moderate.analyzeObject({
      value: { data: { foo: { type: 'text', value: 'value' } }, type: 'profile' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyzeObject: required and optional params', async () => {
    const response = await client.moderate.analyzeObject({
      value: { data: { foo: { type: 'text', value: 'value', modelIds: ['string'] } }, type: 'profile' },
      authorId: 'authorId',
      channelKey: 'channelKey',
      contentId: 'x',
      contextId: 'contextId',
      doNotStore: true,
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('analyzeText: only required params', async () => {
    const responsePromise = client.moderate.analyzeText({ value: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyzeText: required and optional params', async () => {
    const response = await client.moderate.analyzeText({
      value: 'x',
      authorId: 'authorId',
      channelKey: 'channelKey',
      contentId: 'x',
      contextId: 'contextId',
      doNotStore: true,
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('analyzeVideo: only required params', async () => {
    const responsePromise = client.moderate.analyzeVideo({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('analyzeVideo: required and optional params', async () => {
    const response = await client.moderate.analyzeVideo({
      url: 'https://example.com',
      authorId: 'authorId',
      channelKey: 'channelKey',
      contentId: 'x',
      contextId: 'contextId',
      doNotStore: true,
      metadata: { foo: 'bar' },
    });
  });
});
