# Queue

## Overview

### Available Operations

* [list](#list) - List queues
* [retrieve](#retrieve) - Get a queue
* [getStats](#getstats) - Get queue statistics

## list

List the review queues of the project. The default queue comes first. The list is paginated. To get the item counts of a queue, use `GET /queue/{id}`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQueues" method="get" path="/queue" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.list();

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
import { queueList } from "@moderation-api/sdk/funcs/queue-list.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueList(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("queueList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pageSize`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.ListQueuesResponse](../../models/operations/list-queues-response.md)\>**

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

## retrieve

Get a review queue with its item counts. The counts use the filters and the date window of the queue, the same as the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQueue" method="get" path="/queue/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.retrieve("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { queueRetrieve } from "@moderation-api/sdk/funcs/queue-retrieve.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueRetrieve(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queueRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The queue ID.                                                                                                                                                                                                                                |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetQueueResponse](../../models/operations/get-queue-response.md)\>**

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

## getStats

Get review statistics of a queue for a period: resolved and pending items, the top reviewers and the resolved items per day.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQueueStats" method="get" path="/queue/{id}/stats" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.queue.getStats("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { queueGetStats } from "@moderation-api/sdk/funcs/queue-get-stats.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await queueGetStats(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queueGetStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The queue ID.                                                                                                                                                                                                                                |
| `withinDays`                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetQueueStatsResponse](../../models/operations/get-queue-stats-response.md)\>**

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