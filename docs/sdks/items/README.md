# Queue.Items

## Overview

### Available Operations

* [list](#list) - Get queue items
* [resolve](#resolve) - Resolve a queue item
* [unresolve](#unresolve) - Unresolve a queue item

## list

Get paginated list of items in a moderation queue with filtering options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQueueItems" method="get" path="/queue/{id}/items" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.items.list({
    id: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { queueItemsList } from "@moderation-api/sdk/funcs/queue-items-list.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueItemsList(moderationApi, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("queueItemsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListQueueItemsRequest](../../models/operations/list-queue-items-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListQueueItemsResponse](../../models/operations/list-queue-items-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationError       | 401                              | application/json                 |
| errors.PermissionDeniedError     | 403                              | application/json                 |
| errors.NotFoundError             | 404                              | application/json                 |
| errors.RateLimitError            | 429                              | application/json                 |
| errors.InternalServerError       | 500                              | application/json                 |
| errors.ModerationAPIDefaultError | 4XX, 5XX                         | \*/\*                            |

## resolve

Mark a queue item as resolved with a specific moderation action

### Example Usage

<!-- UsageSnippet language="typescript" operationID="resolveQueueItem" method="post" path="/queue/{id}/items/{itemId}/resolve" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.items.resolve("<id>", "<id>", {
    comment: "Reviewed: no violation.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { queueItemsResolve } from "@moderation-api/sdk/funcs/queue-items-resolve.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueItemsResolve(moderationApi, "<id>", "<id>", {
    comment: "Reviewed: no violation.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queueItemsResolve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The queue ID                                                                                                                                                                   |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The item ID to resolve                                                                                                                                                         |
| `body`                                                                                                                                                                         | [operations.ResolveQueueItemRequestBody](../../models/operations/resolve-queue-item-request-body.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResolveQueueItemResponse](../../models/operations/resolve-queue-item-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationError       | 401                              | application/json                 |
| errors.PermissionDeniedError     | 403                              | application/json                 |
| errors.RateLimitError            | 429                              | application/json                 |
| errors.InternalServerError       | 500                              | application/json                 |
| errors.ModerationAPIDefaultError | 4XX, 5XX                         | \*/\*                            |

## unresolve

Mark a previously resolved queue item as unresolved/pending

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unresolveQueueItem" method="post" path="/queue/{id}/items/{itemId}/unresolve" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.items.unresolve("<id>", "<id>", {
    comment: "Reopened after an appeal.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { queueItemsUnresolve } from "@moderation-api/sdk/funcs/queue-items-unresolve.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueItemsUnresolve(moderationApi, "<id>", "<id>", {
    comment: "Reopened after an appeal.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queueItemsUnresolve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The queue ID                                                                                                                                                                   |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The item ID to unresolve                                                                                                                                                       |
| `body`                                                                                                                                                                         | [operations.UnresolveQueueItemRequestBody](../../models/operations/unresolve-queue-item-request-body.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnresolveQueueItemResponse](../../models/operations/unresolve-queue-item-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationError       | 401                              | application/json                 |
| errors.PermissionDeniedError     | 403                              | application/json                 |
| errors.RateLimitError            | 429                              | application/json                 |
| errors.InternalServerError       | 500                              | application/json                 |
| errors.ModerationAPIDefaultError | 4XX, 5XX                         | \*/\*                            |