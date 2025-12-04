// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queue', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.queue.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStats', async () => {
    const responsePromise = client.queue.getStats('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.queue.getStats('id', { withinDays: 'withinDays' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModerationAPI.NotFoundError);
  });
});
