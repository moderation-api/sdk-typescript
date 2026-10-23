# Wordlist

## Overview

### Available Operations

* [list](#list) - List wordlists
* [retrieve](#retrieve) - Get wordlist
* [update](#update) - Update wordlist
* [getEmbeddingStatus](#getembeddingstatus) - Get embedding status

## list

List the wordlists of the organization. The list is paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listWordlists" method="get" path="/wordlist" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.wordlist.list();

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
import { wordlistList } from "@moderation-api/sdk/funcs/wordlist-list.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await wordlistList(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("wordlistList failed:", res.error);
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

**Promise\<[operations.ListWordlistsResponse](../../models/operations/list-wordlists-response.md)\>**

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

Get a specific wordlist by ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWordlist" method="get" path="/wordlist/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.wordlist.retrieve("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { wordlistRetrieve } from "@moderation-api/sdk/funcs/wordlist-retrieve.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await wordlistRetrieve(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("wordlistRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | ID of the wordlist to get                                                                                                                                                                                                                    |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetWordlistResponse](../../models/operations/get-wordlist-response.md)\>**

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

## update

Update a wordlist

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateWordlist" method="put" path="/wordlist/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.wordlist.update("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { wordlistUpdate } from "@moderation-api/sdk/funcs/wordlist-update.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await wordlistUpdate(moderationApi, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("wordlistUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | ID of the wordlist to update                                                                                                                                                                                                                 |
| `body`                                                                                                                                                                                                                                       | [operations.UpdateWordlistRequestBody](../../models/operations/update-wordlist-request-body.md)                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.UpdateWordlistResponse](../../models/operations/update-wordlist-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationError       | 401                              | application/json                 |
| errors.NotFoundError             | 404                              | application/json                 |
| errors.RateLimitError            | 429                              | application/json                 |
| errors.ModerationAPIDefaultError | 4XX, 5XX                         | \*/\*                            |

## getEmbeddingStatus

Get the current embedding progress status for a wordlist

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWordlistEmbeddingStatus" method="get" path="/wordlist/{id}/embedding-status" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.wordlist.getEmbeddingStatus("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { wordlistGetEmbeddingStatus } from "@moderation-api/sdk/funcs/wordlist-get-embedding-status.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await wordlistGetEmbeddingStatus(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("wordlistGetEmbeddingStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | ID of the wordlist to check embedding status for                                                                                                                                                                                             |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetWordlistEmbeddingStatusResponse](../../models/operations/get-wordlist-embedding-status-response.md)\>**

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