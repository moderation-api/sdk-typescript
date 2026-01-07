# Moderation API TypeScript Library

[![NPM version](<https://img.shields.io/npm/v/@moderation-api/sdk.svg?label=npm%20(stable)>)](https://npmjs.org/package/@moderation-api/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@moderation-api/sdk)

This library provides convenient access to the Moderation API REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [docs.moderationapi.com](https://docs.moderationapi.com). The full API of this library can be found in [api.md](api.md).

Use the Moderation API to analyze text and images for offensive content, profanity, toxicity, discrimination, sentiment, language and more - or detect, hide, and extract data entities like emails, phone numbers, addresses and more.

## Installation

```sh
npm install @moderation-api/sdk
# or
pnpm add @moderation-api/sdk
```

## Usage

> The full API of this library can be found in [api.md](api.md).

The package needs to be configured with your project's API key, which is
available in your [Project Dashboard](https://dash.moderationapi.com).

The API key can be provided in two ways:

1. (Recommended) Set the `MODAPI_SECRET_KEY` environment variable
2. Pass it explicitly when instantiating the client

```js
import ModerationAPI from '@moderation-api/sdk';

// Option 1: Use environment variable MODAPI_SECRET_KEY
const moderationApi = new ModerationAPI();

// Option 2: Pass key explicitly (overrides environment variable)
const moderationApi = new ModerationAPI({
  secretKey: 'proj_...',
});
```

### Content Moderation

Use `content.submit` to moderate text, images, video, audio, or complex objects:

```js
// Text moderation
const result = await moderationApi.content.submit({
  content: {
    type: 'text',
    text: 'Your text here',
  },
  contentId: 'message-123', // optional
  authorId: 'user-123', // optional
  conversationId: 'room-123', // optional
  metaType: 'message', // optional
  metadata: { custom: 'data' }, // optional
});

// Image moderation
const result = await moderationApi.content.submit({
  content: {
    type: 'image',
    url: 'https://example.com/image.jpg',
  },
});

// Video moderation
const result = await moderationApi.content.submit({
  content: {
    type: 'video',
    url: 'https://example.com/video.mp4',
  },
});

// Audio moderation
const result = await moderationApi.content.submit({
  content: {
    type: 'audio',
    url: 'https://example.com/audio.mp3',
  },
});

// Object moderation (for complex data with multiple fields)
const result = await moderationApi.content.submit({
  content: {
    type: 'object',
    data: {
      title: { type: 'text', text: 'Post title' },
      body: { type: 'text', text: 'Post content' },
      thumbnail: { type: 'image', url: 'https://example.com/thumb.jpg' },
    },
  },
});
```

#### Using the Response

The response includes both a `flagged` field and a `recommendation` with the API's suggested action:

```js
const result = await moderationApi.content.submit({
  content: { type: 'text', text: 'Some content' },
});

// Simple boolean check
if (result.evaluation.flagged) {
  console.log('Content was flagged by policies');
}

// Use the API's recommendation (considers severity, thresholds, and more)
switch (result.recommendation.action) {
  case 'reject':
    // Block the content completely
    console.log('Content should be rejected');
    break;
  case 'review':
    // Send to moderation queue for human review
    console.log('Content needs manual review');
    break;
  case 'allow':
    // Content is safe to publish
    console.log('Content is approved');
    break;
}

// Access detailed policy results
result.policies.forEach((policy) => {
  console.log(`Policy ${policy.id}: flagged=${policy.flagged}, probability=${policy.probability}`);
});
```

### Queue Management

```js
// Get queue stats
const stats = await moderationApi.queueView.getStats();

// Get queue items
const items = await moderationApi.queueView.getItems();

// Resolve/unresolve items
await moderationApi.queueView.resolveItem('item_id');
await moderationApi.queueView.unresolveItem('item_id');
```

### Wordlist Management

```js
// Get wordlists
const wordlists = await moderationApi.wordlist.list();

// Add words to wordlist
await moderationApi.wordlist.addWords('wordlist_id', {
  words: ['word1', 'word2'],
});

// Remove words from wordlist
await moderationApi.wordlist.removeWords('wordlist_id', {
  words: ['word1'],
});
```

### Author Management

```js
// Create an author
const author = await moderationApi.author.create({
  authorId: 'user_123',
  username: 'john_doe',
  email: 'john@example.com',
});

// List authors
const authors = await moderationApi.author.list();

// Get author details
const authorDetails = await moderationApi.author.get('author_id');

// Update author
await moderationApi.author.update('author_id', {
  username: 'jane_doe',
  email: 'jane@example.com',
});

// Delete author
await moderationApi.author.delete('author_id');
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI();

const params: ModerationAPI.ContentSubmitParams = { content: { text: 'x', type: 'text' } };
const response: ModerationAPI.ContentSubmitResponse = await client.content.submit(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const response = await client.content
  .submit({ content: { text: 'x', type: 'text' } })
  .catch(async (err) => {
    if (err instanceof ModerationAPI.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new ModerationAPI({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.content.submit({ content: { text: 'x', type: 'text' } }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new ModerationAPI({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.content.submit({ content: { text: 'x', type: 'text' } }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new ModerationAPI();

const response = await client.content.submit({ content: { text: 'x', type: 'text' } }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: response, response: raw } = await client.content
  .submit({ content: { text: 'x', type: 'text' } })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(response.recommendation);
```

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `MODERATION_API_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import ModerationAPI from '@moderation-api/sdk';
import pino from 'pino';

const logger = pino();

const client = new ModerationAPI({
  logger: logger.child({ name: 'ModerationAPI' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.content.submit({
  // ...
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import ModerationAPI from '@moderation-api/sdk';
import fetch from 'my-fetch';

const client = new ModerationAPI({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import ModerationAPI from '@moderation-api/sdk';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const client = new ModerationAPI({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import ModerationAPI from '@moderation-api/sdk';

const client = new ModerationAPI({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import ModerationAPI from 'npm:@moderation-api/sdk';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const client = new ModerationAPI({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/moderation-api/sdk-typescript/issues) with questions, bugs, or suggestions, or reach out at [support@moderationapi.com](mailto:support@moderationapi.com).

## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.
- Web browsers: disabled by default to avoid exposing your secret API credentials. Enable browser support by explicitly setting `dangerouslyAllowBrowser` to true'.
  <details>
    <summary>More explanation</summary>

  ### Why is this dangerous?

  Enabling the `dangerouslyAllowBrowser` option can be dangerous because it exposes your secret API credentials in the client-side code. Web browsers are inherently less secure than server environments,
  any user with access to the browser can potentially inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality.

  ### When might this not be dangerous?

  In certain scenarios where enabling browser support might not pose significant risks:

  - Internal Tools: If the application is used solely within a controlled internal environment where the users are trusted, the risk of credential exposure can be mitigated.
  - Public APIs with Limited Scope: If your API has very limited scope and the exposed credentials do not grant access to sensitive data or critical operations, the potential impact of exposure is reduced.
  - Development or debugging purpose: Enabling this feature temporarily might be acceptable, provided the credentials are short-lived, aren't also used in production environments, or are frequently rotated.

</details>

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).

## Email support

Reach out at [support@moderationapi.com](mailto:support@moderationapi.com)

## More Information

- [REST API Reference](https://docs.moderationapi.com/api-reference/introduction)
- [Rate limits](https://docs.moderationapi.com/api-reference/rate-limits)
- [Error Handling](https://docs.moderationapi.com/api-reference/errors)
- [Documentation](https://docs.moderationapi.com/get-started/introduction)
- [Test your API key](https://docs.moderationapi.com/api-reference/authentication)
