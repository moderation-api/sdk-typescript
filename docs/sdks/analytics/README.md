# Analytics

## Overview

### Available Operations

* [summary](#summary) - Get the analytics summary
* [policies](#policies) - Get the most flagged policies
* [authors](#authors) - Get the most flagged authors
* [channels](#channels) - Get analytics per channel
* [volumes](#volumes) - Get volumes over time
* [automation](#automation) - Get the automation breakdown

## summary

Get the totals of the project for a time window: requests, flags, flag rate, allowed, rejected and sent to review, with the window before for the trend. Also the review queue backlog and a flag-rate spike, if there is one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsSummary" method="get" path="/analytics/summary" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.summary();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsSummary } from "@moderation-api/sdk/funcs/analytics-summary.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsSummary(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsSummaryQueryParamRange](../../models/operations/get-analytics-summary-query-param-range.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `channel`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsSummaryResponse](../../models/operations/get-analytics-summary-response.md)\>**

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

## policies

Get the policy labels that flagged the most content in a time window, largest first, with the count in the window before.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsPolicies" method="get" path="/analytics/policies" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.policies();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsPolicies } from "@moderation-api/sdk/funcs/analytics-policies.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsPolicies(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsPoliciesQueryParamRange](../../models/operations/get-analytics-policies-query-param-range.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `channel`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `limit`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsPoliciesResponse](../../models/operations/get-analytics-policies-response.md)\>**

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

## authors

Get the authors with the most flagged content in a time window, largest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsAuthors" method="get" path="/analytics/authors" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.authors();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsAuthors } from "@moderation-api/sdk/funcs/analytics-authors.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsAuthors(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAuthors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsAuthorsQueryParamRange](../../models/operations/get-analytics-authors-query-param-range.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `channel`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `limit`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsAuthorsResponse](../../models/operations/get-analytics-authors-response.md)\>**

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

## channels

Get requests, flags and flag rate for each channel of the project in a time window.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsChannels" method="get" path="/analytics/channels" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.channels();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsChannels } from "@moderation-api/sdk/funcs/analytics-channels.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsChannels(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsChannels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsChannelsQueryParamRange](../../models/operations/get-analytics-channels-query-param-range.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsChannelsResponse](../../models/operations/get-analytics-channels-response.md)\>**

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

## volumes

Get requests, flags, rejections and reviews per hour (24h) or per day (7d, 30d, 90d), oldest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsVolumes" method="get" path="/analytics/volumes" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.volumes();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsVolumes } from "@moderation-api/sdk/funcs/analytics-volumes.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsVolumes(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsVolumes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsVolumesQueryParamRange](../../models/operations/get-analytics-volumes-query-param-range.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `channel`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsVolumesResponse](../../models/operations/get-analytics-volumes-response.md)\>**

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

## automation

Get how flagged content was handled in a time window: settled by rules or the casebook, or sent to human review, and what the reviewers decided.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAnalyticsAutomation" method="get" path="/analytics/automation" -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.automation();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ModerationApiCore } from "@moderation-api/sdk/core.js";
import { analyticsAutomation } from "@moderation-api/sdk/funcs/analytics-automation.js";

// Use `ModerationApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moderationApi = new ModerationApiCore({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const res = await analyticsAutomation(moderationApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                                      | [operations.GetAnalyticsAutomationQueryParamRange](../../models/operations/get-analytics-automation-query-param-range.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.                                                                                              |
| `channel`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.GetAnalyticsAutomationResponse](../../models/operations/get-analytics-automation-response.md)\>**

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