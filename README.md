<!-- Start Custom [intro] -->
# Moderation API TypeScript SDK

[![npm](https://img.shields.io/npm/v/@moderation-api/sdk.svg)](https://www.npmjs.com/package/@moderation-api/sdk)

The official TypeScript and JavaScript library for [Moderation API](https://moderationapi.com). Use it on the server to moderate text, images, video and audio, manage authors, review queues, actions and wordlists, and verify webhooks.

- Get an API key in the [dashboard](https://dash.moderationapi.com).
- Read the [documentation](https://docs.moderationapi.com) and the [API reference](https://docs.moderationapi.com/api-reference/introduction).

> [!WARNING]
> Keep your API key secret. Use this SDK on your server, not in a browser or mobile app, where users can read the key.
<!-- End Custom [intro] -->

<!-- Start Summary [summary] -->
## Summary

Moderation API: Moderate text, images, video and audio in real time, manage authors, review queues and actions, and receive webhooks.

More information about the API can be found at https://docs.moderationapi.com
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Moderation API TypeScript SDK](#moderation-api-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Moderating content](#moderating-content)
  * [Verifying webhooks](#verifying-webhooks)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
  * [Imports and types](#imports-and-types)
  * [Timeouts](#timeouts)
  * [Supported runtimes](#supported-runtimes)
  * [Support](#support)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @moderation-api/sdk
```

### PNPM

```bash
pnpm add @moderation-api/sdk
```

### Bun

```bash
bun add @moderation-api/sdk
```

### Yarn

```bash
yarn add @moderation-api/sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.content.submit({
    content: {
      type: "text",
      text: "Hey, check out my profile for a deal!",
    },
    contentId: "message-48213",
    authorId: "user-1092",
    conversationId: "room-general",
    metadata: {
      "platform": "ios",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
<!-- Start Custom [guide] -->
## Moderating content

Use `content.submit` to moderate text, images, video, audio, or objects with several fields. All parameters except `content` are optional.

The client reads your API key from the `MODAPI_SECRET_KEY` environment variable. To set it in code, pass `secretKey`.

```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi(); // reads MODAPI_SECRET_KEY

// Text
await moderationApi.content.submit({
  content: { type: "text", text: "Your text here" },
  contentId: "message-123", // your ID for the content
  authorId: "user-123", // your ID for the user who wrote it
  conversationId: "room-123", // groups related content
  metadata: { platform: "ios" },
});

// Image, video and audio: send a URL
await moderationApi.content.submit({
  content: { type: "image", url: "https://example.com/image.jpg" },
});
await moderationApi.content.submit({
  content: { type: "video", url: "https://example.com/video.mp4" },
});
await moderationApi.content.submit({
  content: { type: "audio", url: "https://example.com/audio.mp3" },
});

// An object with several fields, moderated together
await moderationApi.content.submit({
  content: {
    type: "object",
    data: {
      title: { type: "text", text: "Post title" },
      body: { type: "text", text: "Post content" },
      thumbnail: { type: "image", url: "https://example.com/thumb.jpg" },
    },
  },
});
```

### Using the result

`evaluation.flagged` tells you if any policy flagged the content. `recommendation.action` is the action the API recommends after it applies your thresholds and rules: `allow`, `review` or `reject`.

```typescript
const result = await moderationApi.content.submit({
  content: { type: "text", text: "Some content" },
});

if (result.evaluation.flagged) {
  console.log("A policy flagged the content");
}

switch (result.recommendation.action) {
  case "reject":
    // Block the content
    break;
  case "allow":
    // Publish the content
    break;
  case "review":
  default:
    // Publish or hold it, and send it to a review queue.
    // `default` also catches actions added to the API later.
    break;
}

for (const policy of result.policies) {
  if ("id" in policy) {
    console.log(`${policy.id}: flagged=${policy.flagged}`);
  }
}
```

### Values added later

Some fields are open enums, for example `recommendation.action` and the error `code`. The API can add a value, and an older SDK version then returns it as a plain string. It does not throw. Always handle unknown values: for `recommendation.action`, treat an unknown value as `review`, as the `default` branch above does.

## Verifying webhooks

Moderation API signs every webhook delivery with your project's webhook signing secret. The signature is in the `modapi-signature` header.

### Webhook signing secret

Find the secret on the [API keys page in the dashboard](https://dash.moderationapi.com/project/latest/configure/api-keys), or get it with `await moderationApi.webhookSecret.retrieve()`. Store it in the `MODAPI_WEBHOOK_SECRET` environment variable. It is not your API key. Get it once, for example in a setup script, and do not call `retrieve` for each delivery, so verification does not depend on a call to the API. Keep it as secret as your API key: anyone with it can sign webhooks.

### Verify a delivery

`validateWebhook` checks the signature against the raw body and returns the event. It does not need a client. It reads the secret from `MODAPI_WEBHOOK_SECRET`; to set it in code, pass `secret`. It throws `WebhookSignatureError` if the signature does not match.

Verification needs the raw body, byte for byte. If your framework parses the JSON body first and you serialize it again, the bytes can change and the check fails.

**Fetch API** (Next.js App Router, Hono, Bun, Cloudflare Workers):

```typescript
import { validateWebhook } from "@moderation-api/sdk";

export async function POST(request: Request) {
  try {
    const event = await validateWebhook({ request });
    console.log(event.type);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }
  return new Response(null, { status: 200 });
}
```

**Express**: use `express.raw` on the webhook route, so `req.body` is the raw body.

```typescript
import express from "express";
import { validateWebhook } from "@moderation-api/sdk";

const app = express();

app.post(
  "/webhooks/moderation",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const event = await validateWebhook({ request: req });
      console.log(event.type);
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  },
);
```

**Next.js Pages Router**: turn off the body parser for the route. `validateWebhook` then reads the raw body from the request.

```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import { validateWebhook } from "@moderation-api/sdk";

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const event = await validateWebhook({ request: req });
    console.log(event.type);
    res.status(200).end();
  } catch {
    res.status(400).end();
  }
}
```

### Handle an event

`validateWebhook` returns a `WebhookEvent`, a union of the event types. Switch on `event.type` and TypeScript knows the shape of `event.data.object`. Each event also has its own type, for example `QueueItemRejectedEvent` or `AuthorBlockedEvent`.

Webhook payloads use the API's field names, in snake_case (`flagged_fields`, `external_id`). The request and response objects of the client methods use camelCase (`flaggedFields`, `externalId`).

The payload is not validated against a schema, so a field or an event type added to the API later never fails a delivery. An event type that this SDK version does not know reaches the `default` branch. Read it as `UnknownWebhookEvent`.

```typescript
import { validateWebhook, type UnknownWebhookEvent } from "@moderation-api/sdk";

const event = await validateWebhook({ request });

switch (event.type) {
  case "queue_item.rejected": {
    const { item, author } = event.data.object;
    console.log(item?.id, item?.flagged_fields, author?.external_id);
    break;
  }
  case "author.blocked": {
    console.log(event.data.object.author.external_id);
    break;
  }
  default: {
    const unknown = event as UnknownWebhookEvent;
    console.log(`Unhandled event ${unknown.type}`);
  }
}
```
<!-- End Custom [guide] -->


<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type | Scheme      | Environment Variable |
| ----------- | ---- | ----------- | -------------------- |
| `secretKey` | http | HTTP Bearer | `MODAPI_SECRET_KEY`  |

To authenticate with the API the `secretKey` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->
<!-- Start Custom [auth] -->
### Project and organization keys

Moderation API has two kinds of API keys:

- A **project key** works with one project: content, authors, review queues, actions, wordlists, webhooks and the account. Most integrations need only this key.
- An **organization key** works with the [management API](https://docs.moderationapi.com/api-reference/management-api): projects and channels. It can also use any project's endpoints: name the project with `projectId`.

A project key can't call the management API: the API returns `403` with the code `organization_key_required`. If you use both kinds of key, create one client for each:

```typescript
import { ModerationApi } from "@moderation-api/sdk";

// Project key, from MODAPI_SECRET_KEY
const moderationApi = new ModerationApi();

// Organization key
const managementApi = new ModerationApi({
  secretKey: process.env["MODAPI_ORGANIZATION_KEY"] ?? "",
});

for await (const page of await managementApi.projects.list()) {
  for (const project of page.result.data) {
    console.log(project.id, project.name);
  }
}
```

Create the organization client only where you manage projects and channels, for example in a setup script, and keep the organization key out of the code that moderates content.
<!-- End Custom [auth] -->


<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Account](docs/sdks/account/README.md)

* [retrieve](docs/sdks/account/README.md#retrieve) - Get account details

### [Actions](docs/sdks/actions/README.md)

* [list](docs/sdks/actions/README.md#list) - List moderation actions
* [create](docs/sdks/actions/README.md#create) - Create an action
* [retrieve](docs/sdks/actions/README.md#retrieve) - Get an action
* [update](docs/sdks/actions/README.md#update) - Update an action
* [delete](docs/sdks/actions/README.md#delete) - Delete an action
* [execute](docs/sdks/actions/README.md#execute) - Execute moderation action

### [Analytics](docs/sdks/analytics/README.md)

* [summary](docs/sdks/analytics/README.md#summary) - Get the analytics summary
* [policies](docs/sdks/analytics/README.md#policies) - Get the most flagged policies
* [authors](docs/sdks/analytics/README.md#authors) - Get the most flagged authors
* [channels](docs/sdks/analytics/README.md#channels) - Get analytics per channel
* [volumes](docs/sdks/analytics/README.md#volumes) - Get volumes over time
* [automation](docs/sdks/analytics/README.md#automation) - Get the automation breakdown

### [Authors](docs/sdks/authors/README.md)

* [list](docs/sdks/authors/README.md#list) - List authors
* [create](docs/sdks/authors/README.md#create) - Create a new author
* [retrieve](docs/sdks/authors/README.md#retrieve) - Get author details
* [update](docs/sdks/authors/README.md#update) - Update author details
* [delete](docs/sdks/authors/README.md#delete) - Delete an author
* [block](docs/sdks/authors/README.md#block) - Block author
* [suspend](docs/sdks/authors/README.md#suspend) - Suspend author
* [unblock](docs/sdks/authors/README.md#unblock) - Unblock author

### [Channels](docs/sdks/channels/README.md)

* [list](docs/sdks/channels/README.md#list) - List channels
* [create](docs/sdks/channels/README.md#create) - Create a channel
* [retrieve](docs/sdks/channels/README.md#retrieve) - Get a channel
* [update](docs/sdks/channels/README.md#update) - Update a channel
* [delete](docs/sdks/channels/README.md#delete) - Delete a channel
* [duplicate](docs/sdks/channels/README.md#duplicate) - Duplicate a channel

### [Content](docs/sdks/content/README.md)

* [reject](docs/sdks/content/README.md#reject) - Reject content
* [allow](docs/sdks/content/README.md#allow) - Allow content
* [submit](docs/sdks/content/README.md#submit) - Submit content

### [Feedback](docs/sdks/feedback/README.md)

* [create](docs/sdks/feedback/README.md#create) - Send feedback

### [Projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List projects
* [create](docs/sdks/projects/README.md#create) - Create a project
* [retrieve](docs/sdks/projects/README.md#retrieve) - Get a project
* [update](docs/sdks/projects/README.md#update) - Update a project
* [delete](docs/sdks/projects/README.md#delete) - Delete a project
* [duplicate](docs/sdks/projects/README.md#duplicate) - Duplicate a project

#### [Projects.ApiKeys](docs/sdks/apikeys/README.md)

* [create](docs/sdks/apikeys/README.md#create) - Create a project API key

### [Queue](docs/sdks/queue/README.md)

* [list](docs/sdks/queue/README.md#list) - List queues
* [retrieve](docs/sdks/queue/README.md#retrieve) - Get a queue
* [getStats](docs/sdks/queue/README.md#getstats) - Get queue statistics

#### [Queue.Items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List queue items
* [resolve](docs/sdks/items/README.md#resolve) - Resolve a queue item
* [resolveMany](docs/sdks/items/README.md#resolvemany) - Resolve queue items
* [unresolve](docs/sdks/items/README.md#unresolve) - Unresolve a queue item

### [Webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [retrieve](docs/sdks/webhooks/README.md#retrieve) - Get a webhook
* [update](docs/sdks/webhooks/README.md#update) - Update a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook

### [WebhookSecret](docs/sdks/webhooksecret/README.md)

* [retrieve](docs/sdks/webhooksecret/README.md#retrieve) - Get the webhook signing secret

### [Wordlist](docs/sdks/wordlist/README.md)

* [list](docs/sdks/wordlist/README.md#list) - List wordlists
* [create](docs/sdks/wordlist/README.md#create) - Create wordlist
* [retrieve](docs/sdks/wordlist/README.md#retrieve) - Get wordlist
* [update](docs/sdks/wordlist/README.md#update) - Update wordlist
* [delete](docs/sdks/wordlist/README.md#delete) - Delete wordlist
* [getEmbeddingStatus](docs/sdks/wordlist/README.md#getembeddingstatus) - Get embedding status

#### [Wordlist.Words](docs/sdks/words/README.md)

* [add](docs/sdks/words/README.md#add) - Add words to wordlist
* [remove](docs/sdks/words/README.md#remove) - Remove words from wordlist

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountRetrieve`](docs/sdks/account/README.md#retrieve) - Get account details
- [`actionsCreate`](docs/sdks/actions/README.md#create) - Create an action
- [`actionsDelete`](docs/sdks/actions/README.md#delete) - Delete an action
- [`actionsExecute`](docs/sdks/actions/README.md#execute) - Execute moderation action
- [`actionsList`](docs/sdks/actions/README.md#list) - List moderation actions
- [`actionsRetrieve`](docs/sdks/actions/README.md#retrieve) - Get an action
- [`actionsUpdate`](docs/sdks/actions/README.md#update) - Update an action
- [`analyticsAuthors`](docs/sdks/analytics/README.md#authors) - Get the most flagged authors
- [`analyticsAutomation`](docs/sdks/analytics/README.md#automation) - Get the automation breakdown
- [`analyticsChannels`](docs/sdks/analytics/README.md#channels) - Get analytics per channel
- [`analyticsPolicies`](docs/sdks/analytics/README.md#policies) - Get the most flagged policies
- [`analyticsSummary`](docs/sdks/analytics/README.md#summary) - Get the analytics summary
- [`analyticsVolumes`](docs/sdks/analytics/README.md#volumes) - Get volumes over time
- [`authorsBlock`](docs/sdks/authors/README.md#block) - Block author
- [`authorsCreate`](docs/sdks/authors/README.md#create) - Create a new author
- [`authorsDelete`](docs/sdks/authors/README.md#delete) - Delete an author
- [`authorsList`](docs/sdks/authors/README.md#list) - List authors
- [`authorsRetrieve`](docs/sdks/authors/README.md#retrieve) - Get author details
- [`authorsSuspend`](docs/sdks/authors/README.md#suspend) - Suspend author
- [`authorsUnblock`](docs/sdks/authors/README.md#unblock) - Unblock author
- [`authorsUpdate`](docs/sdks/authors/README.md#update) - Update author details
- [`channelsCreate`](docs/sdks/channels/README.md#create) - Create a channel
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete a channel
- [`channelsDuplicate`](docs/sdks/channels/README.md#duplicate) - Duplicate a channel
- [`channelsList`](docs/sdks/channels/README.md#list) - List channels
- [`channelsRetrieve`](docs/sdks/channels/README.md#retrieve) - Get a channel
- [`channelsUpdate`](docs/sdks/channels/README.md#update) - Update a channel
- [`contentAllow`](docs/sdks/content/README.md#allow) - Allow content
- [`contentReject`](docs/sdks/content/README.md#reject) - Reject content
- [`contentSubmit`](docs/sdks/content/README.md#submit) - Submit content
- [`feedbackCreate`](docs/sdks/feedback/README.md#create) - Send feedback
- [`projectsApiKeysCreate`](docs/sdks/apikeys/README.md#create) - Create a project API key
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create a project
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Delete a project
- [`projectsDuplicate`](docs/sdks/projects/README.md#duplicate) - Duplicate a project
- [`projectsList`](docs/sdks/projects/README.md#list) - List projects
- [`projectsRetrieve`](docs/sdks/projects/README.md#retrieve) - Get a project
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Update a project
- [`queueGetStats`](docs/sdks/queue/README.md#getstats) - Get queue statistics
- [`queueItemsList`](docs/sdks/items/README.md#list) - List queue items
- [`queueItemsResolve`](docs/sdks/items/README.md#resolve) - Resolve a queue item
- [`queueItemsResolveMany`](docs/sdks/items/README.md#resolvemany) - Resolve queue items
- [`queueItemsUnresolve`](docs/sdks/items/README.md#unresolve) - Unresolve a queue item
- [`queueList`](docs/sdks/queue/README.md#list) - List queues
- [`queueRetrieve`](docs/sdks/queue/README.md#retrieve) - Get a queue
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`webhookSecretRetrieve`](docs/sdks/webhooksecret/README.md#retrieve) - Get the webhook signing secret
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksRetrieve`](docs/sdks/webhooks/README.md#retrieve) - Get a webhook
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a webhook
- [`wordlistCreate`](docs/sdks/wordlist/README.md#create) - Create wordlist
- [`wordlistDelete`](docs/sdks/wordlist/README.md#delete) - Delete wordlist
- [`wordlistGetEmbeddingStatus`](docs/sdks/wordlist/README.md#getembeddingstatus) - Get embedding status
- [`wordlistList`](docs/sdks/wordlist/README.md#list) - List wordlists
- [`wordlistRetrieve`](docs/sdks/wordlist/README.md#retrieve) - Get wordlist
- [`wordlistUpdate`](docs/sdks/wordlist/README.md#update) - Update wordlist
- [`wordlistWordsAdd`](docs/sdks/words/README.md#add) - Add words to wordlist
- [`wordlistWordsRemove`](docs/sdks/words/README.md#remove) - Remove words from wordlist

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

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
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.summary(
    undefined,
    undefined,
    undefined,
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.summary();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ModerationAPIError`](./src/models/errors/moderation-api-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { ModerationApi } from "@moderation-api/sdk";
import * as errors from "@moderation-api/sdk/models/errors";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  try {
    const result = await moderationApi.analytics.summary();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ModerationAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestError) {
        console.log(error.data$.type); // string
        console.log(error.data$.code); // models.BadRequestErrorCode
        console.log(error.data$.message); // string
        console.log(error.data$.issues); // ErrorIssue[]
        console.log(error.data$.requestId); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ModerationAPIError`](./src/models/errors/moderation-api-error.ts): The base class for HTTP error responses.
  * [`AuthenticationError`](./src/models/errors/authentication-error.ts): The API key is missing, invalid or revoked. Status code `401`.
  * [`RateLimitError`](./src/models/errors/rate-limit-error.ts): Too many requests. Retry after the number of seconds in the `Retry-After` header. Status code `429`.
  * [`BadRequestError`](./src/models/errors/bad-request-error.ts): The request is malformed or a parameter is invalid. Status code `400`. *

<details><summary>Less common errors (10)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`ModerationAPIError`](./src/models/errors/moderation-api-error.ts)**:
* [`NotFoundError`](./src/models/errors/not-found-error.ts): The resource does not exist or the key cannot see it. Status code `404`. Applicable to 45 of 59 methods.*
* [`PermissionDeniedError`](./src/models/errors/permission-denied-error.ts): The API key cannot do this, or the plan limit for this resource is reached. Status code `403`. Applicable to 36 of 59 methods.*
* [`InternalServerError`](./src/models/errors/internal-server-error.ts): Something went wrong on our side. Retry with backoff. Status code `500`. Applicable to 23 of 59 methods.*
* [`ConflictError`](./src/models/errors/conflict-error.ts): The request conflicts with the current state of a resource. Status code `409`. Applicable to 2 of 59 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  serverURL: "https://api.moderationapi.com/v1",
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.analytics.summary();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { ModerationApi } from "@moderation-api/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@moderation-api/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ModerationApi({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ModerationApi } from "@moderation-api/sdk";

const sdk = new ModerationApi({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MODAPI_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Custom [more] -->
## Imports and types

The client is both the default and a named export:

```typescript
import ModerationApi from "@moderation-api/sdk";
// or
import { ModerationApi } from "@moderation-api/sdk";
```

Request and response types are in `@moderation-api/sdk/models/operations`, shared types in `@moderation-api/sdk/models`, error classes in `@moderation-api/sdk/models/errors`. Webhook event types (`WebhookEvent`, `QueueItemRejectedEvent`, ...) are exported from the package root, next to `validateWebhook`:

```typescript
import type { SubmitContentRequestBody, SubmitContentResponse } from "@moderation-api/sdk/models/operations";
import { PermissionDeniedError } from "@moderation-api/sdk/models/errors";
import type { WebhookEvent } from "@moderation-api/sdk";
```

Upgrading from 4.x? Read [MIGRATION.md](MIGRATION.md).

## Timeouts

Set a timeout in milliseconds for all requests on the client, or for one request:

```typescript
const moderationApi = new ModerationApi({ timeoutMs: 10_000 });

await moderationApi.content.submit(
  { content: { type: "text", text: "Hello" } },
  { timeoutMs: 5_000 },
);
```

## Supported runtimes

Node.js 18 or later, Bun 1 or later, Deno, Cloudflare Workers and other runtimes with the Fetch API. See [RUNTIMES.md](RUNTIMES.md) for the full list and the recommended TypeScript compiler options.


## Support

- [API reference](https://docs.moderationapi.com/api-reference/introduction)
- [Errors and error codes](https://docs.moderationapi.com/api-reference/errors)
- [Rate limits](https://docs.moderationapi.com/api-reference/rate-limits)
- [Guides](https://docs.moderationapi.com/get-started/introduction)
- Email [support@moderationapi.com](mailto:support@moderationapi.com)

Found a bug? Open an issue in this repository. This package is generated from the [Moderation API OpenAPI spec](https://api.moderationapi.com/v1/openapi.json), so pull requests to the generated code can't be merged as they are, but we use them to fix the generator.
<!-- End Custom [more] -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@moderation-api/sdk&utm_campaign=typescript)
