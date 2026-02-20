// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.queue.items.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.queue.items.list(
        'id',
        {
          afterDate: 'afterDate',
          authorId: 'authorId',
          beforeDate: 'beforeDate',
          conversationIds: 'conversationIds',
          filteredActionIds: 'filteredActionIds',
          includeResolved: 'includeResolved',
          labels: 'labels',
          pageNumber: 0,
          pageSize: 0,
          sortDirection: 'asc',
          sortField: 'createdAt',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModerationAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('resolve: only required params', async () => {
    const responsePromise = client.queue.items.resolve('itemId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resolve: required and optional params', async () => {
    const response = await client.queue.items.resolve('itemId', { id: 'id', comment: 'comment' });
  });

  // Mock server tests are disabled
  test.skip('unresolve: only required params', async () => {
    const responsePromise = client.queue.items.unresolve('itemId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unresolve: required and optional params', async () => {
    const response = await client.queue.items.unresolve('itemId', { id: 'id', comment: 'comment' });
  });
});
