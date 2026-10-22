# Authors

## Overview

### Available Operations

* [list](#list) - List authors
* [create](#create) - Create a new author
* [retrieve](#retrieve) - Get author details
* [update](#update) - Update author details
* [delete](#delete) - Delete an author

## list

List authors with their activity metrics and reputation. The list is paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAuthors" method="get" path="/authors" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.authors.list({});

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
import { authorsList } from "@moderation-api/sdk/funcs/authors-list.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await authorsList(moderationApi, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("authorsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuthorsRequest](../../models/operations/list-authors-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAuthorsResponse](../../models/operations/list-authors-response.md)\>**

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

## create

Create a new author. Typically not needed as authors are created automatically when content is moderated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAuthor" method="post" path="/authors" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.authors.create({
    name: "Jamie Rivera",
    email: "jamie@example.com",
    metadata: {
      emailVerified: true,
      isPayingCustomer: false,
    },
    externalId: "user-1092",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { authorsCreate } from "@moderation-api/sdk/funcs/authors-create.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await authorsCreate(moderationApi, {
    name: "Jamie Rivera",
    email: "jamie@example.com",
    metadata: {
      emailVerified: true,
      isPayingCustomer: false,
    },
    externalId: "user-1092",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAuthorRequest](../../models/operations/create-author-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicAuthor](../../models/public-author.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestError           | 400                              | application/json                 |
| errors.AuthenticationError       | 401                              | application/json                 |
| errors.PermissionDeniedError     | 403                              | application/json                 |
| errors.RateLimitError            | 429                              | application/json                 |
| errors.InternalServerError       | 500                              | application/json                 |
| errors.ModerationAPIDefaultError | 4XX, 5XX                         | \*/\*                            |

## retrieve

Get detailed information about a specific author including historical data and analysis

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAuthor" method="get" path="/authors/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.authors.retrieve("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { authorsRetrieve } from "@moderation-api/sdk/funcs/authors-retrieve.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await authorsRetrieve(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorsRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Either external ID or the ID assigned by moderation API.                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicAuthor](../../models/public-author.md)\>**

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

Update the details of a specific author

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAuthor" method="put" path="/authors/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.authors.update("<id>", {
    metadata: {
      identityVerified: true,
    },
    manualTrustLevel: 2,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { authorsUpdate } from "@moderation-api/sdk/funcs/authors-update.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await authorsUpdate(moderationApi, "<id>", {
    metadata: {
      identityVerified: true,
    },
    manualTrustLevel: 2,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Either external ID or the ID assigned by moderation API.                                                                                                                       |
| `body`                                                                                                                                                                         | [operations.UpdateAuthorRequestBody](../../models/operations/update-author-request-body.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicAuthor](../../models/public-author.md)\>**

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

## delete

Delete a specific author. This resets the author: status, blocks, trust level, metrics and action history are removed. The author is created again with a clean record the next time content is moderated for the same ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAuthor" method="delete" path="/authors/{id}" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.authors.delete("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { authorsDelete } from "@moderation-api/sdk/funcs/authors-delete.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await authorsDelete(moderationApi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Either external ID or the ID assigned by moderation API.                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteAuthorResponse](../../models/operations/delete-author-response.md)\>**

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