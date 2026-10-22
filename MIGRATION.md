# Migrating from 4.x to 5.x

Version 5 is generated from the OpenAPI spec with a new generator. Most calls keep their names. Check each item below before you upgrade.

```bash
npm install @moderation-api/sdk@5
```

## Client

- The client class is `ModerationApi` (was `ModerationAPI`). It is also the default export, so `import ModerationApi from "@moderation-api/sdk"` keeps working.
- The client reads the API key from `MODAPI_SECRET_KEY`. To set it in code, pass `secretKey`.

## Imports

The `@moderation-api/sdk/resources` import path is removed. Import types from:

| Types | Import path |
| --- | --- |
| Requests and responses | `@moderation-api/sdk/models/operations` |
| Shared types, for example `PublicAuthor` | `@moderation-api/sdk/models` |
| Error classes | `@moderation-api/sdk/models/errors` |
| Webhook events, `validateWebhook` | `@moderation-api/sdk` |

## Renamed and removed methods

| 4.x | 5.x |
| --- | --- |
| `account.list()` | `account.retrieve()` |
| `actions.execute.execute(params)` | `actions.execute(params)` |
| `actions.execute.executeByID(id, params)` | `actions.execute({ actionId, ... })` or `actions.execute({ actionKey, ... })` |
| `webhooks.constructEvent(rawBody, signature, secret)` | `await validateWebhook({ request, secret })` |
| `auth.*` | Removed |
| `content.stream` | Removed. See [Real-time voice](https://docs.moderationapi.com/content-moderation/real-time-voice). |

## Webhooks

`webhooks.constructEvent` was synchronous and took the raw body and the signature. `validateWebhook` is async, is exported from the package root and takes the whole request: a Fetch `Request`, or a Node.js request (Express, Next.js Pages Router). It reads the secret from `MODAPI_WEBHOOK_SECRET` when you do not pass `secret`.

```typescript
// 4.x
const event = client.webhooks.constructEvent(rawBody, signature, secret);

// 5.x
import { validateWebhook } from "@moderation-api/sdk";
const event = await validateWebhook({ request: req });
```

Webhook payloads keep the API's snake_case field names (`flagged_fields`, `external_id`). Only the client's requests and responses use camelCase.

## camelCase fields

Request and response fields are camelCase. The 4.x types used the API's snake_case names. For example, `authors.create` and `authors.update`:

| 4.x | 5.x |
| --- | --- |
| `external_id` | `externalId` |
| `external_link` | `externalLink` |
| `profile_picture` | `profilePicture` |
| `first_seen` | `firstSeen` |
| `last_seen` | `lastSeen` |
| `manual_trust_level` | `manualTrustLevel` |
| `metadata.email_verified` | `metadata.emailVerified` |
| `metadata.phone_verified` | `metadata.phoneVerified` |
| `metadata.identity_verified` | `metadata.identityVerified` |
| `metadata.is_paying_customer` | `metadata.isPayingCustomer` |

The same applies to responses, for example `author.trustLevel`, `result.evaluation.flagProbability` and `result.recommendation.reasonCodes`.

## Lists

List methods take `page` and `pageSize`, and return `{ data, pagination }` instead of a plain array or a resource-specific shape. You can also iterate over the result to get every page.

## Errors

There is one error class per HTTP status (`BadRequestError`, `NotFoundError`, `RateLimitError`, ...). `code` is the specific error code (for example `invalid_api_key`), not the HTTP category. The old `data` field is removed.

## Organization keys

Organization keys work only with `projects` and `channels`. Project keys work with everything else. Use one client per key.

## Renamed types

| 4.x (`@moderation-api/sdk/resources`) | 5.x |
| --- | --- |
| `AccountListResponse` | `GetAccountResponse` |
| `ActionCreateParams` | `CreateActionRequestBody` |
| `ActionCreateResponse` | `CreateActionResponse` |
| `ActionRetrieveResponse` | `GetActionResponse` |
| `ActionUpdateParams` | `UpdateActionRequestBody` |
| `ActionUpdateResponse` | `UpdateActionResponse` |
| `ActionListParams` | `ListActionsRequest` |
| `ActionListResponse` | `ListActionsResponse` |
| `ActionDeleteResponse` | `DeleteActionResponse` |
| `ExecuteExecuteParams` | `ExecuteActionRequestBody` |
| `ExecuteExecuteResponse` | `ExecuteActionResponse` |
| `AuthorCreateParams` | `CreateAuthorRequestBody` |
| `AuthorUpdateParams` | `UpdateAuthorRequestBody` |
| `AuthorListParams` | `ListAuthorsRequest` |
| `AuthorCreateResponse`, `AuthorRetrieveResponse`, `AuthorUpdateResponse` | `PublicAuthor` (`@moderation-api/sdk/models`) |
| `AuthorListResponse` | `ListAuthorsResponse` |
| `AuthorDeleteResponse` | `DeleteAuthorResponse` |
| `ContentSubmitParams` | `SubmitContentRequestBody` |
| `ContentSubmitResponse` | `SubmitContentResponse` |
| `ItemListParams` | `ListQueueItemsRequest` |
| `ItemListResponse` | `ListQueueItemsResponse` |
| `ItemResolveParams` | `ResolveQueueItemRequestBody` |
| `ItemResolveResponse` | `ResolveQueueItemResponse` |
| `ItemUnresolveParams` | `UnresolveQueueItemRequestBody` |
| `ItemUnresolveResponse` | `UnresolveQueueItemResponse` |
| `QueueRetrieveResponse` | `GetQueueResponse` |
| `QueueGetStatsParams` | `GetQueueStatsRequest` |
| `QueueGetStatsResponse` | `GetQueueStatsResponse` |
| `WebhookEvent` | `WebhookEvent` (`@moderation-api/sdk`) |
| `WebhookSecretRetrieveResponse` | `GetWebhookSecretResponse` |
| `WebhookCreateParams` | `CreateWebhookRequestBody` |
| `WebhookCreateResponse` | `CreateWebhookResponse` |
| `WebhookRetrieveResponse` | `GetWebhookResponse` |
| `WebhookUpdateParams` | `UpdateWebhookRequestBody` |
| `WebhookUpdateResponse` | `UpdateWebhookResponse` |
| `WebhookListResponse` | `ListWebhooksResponse` |
| `WebhookDeleteResponse` | `DeleteWebhookResponse` |
| `WordlistRetrieveResponse` | `GetWordlistResponse` |
| `WordlistUpdateParams` | `UpdateWordlistRequestBody` |
| `WordlistUpdateResponse` | `UpdateWordlistResponse` |
| `WordlistListResponse` | `ListWordlistsResponse` |
| `WordlistGetEmbeddingStatusResponse` | `GetWordlistEmbeddingStatusResponse` |
| `WordAddParams` | `AddWordlistWordsRequestBody` |
| `WordAddResponse` | `AddWordlistWordsResponse` |
| `WordRemoveParams` | `RemoveWordlistWordsRequest` |
| `WordRemoveResponse` | `RemoveWordlistWordsResponse` |
