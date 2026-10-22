# CreateWebhookResponse

Webhook created successfully

## Example Usage

```typescript
import { CreateWebhookResponse } from "@moderation-api/sdk/models/operations";

let value: CreateWebhookResponse = {
  id: "<id>",
  name: "<value>",
  url: "https://low-tomatillo.biz/",
  eventTypes: [],
  payloadVersion: "V2",
  createdAt: "1732089927525",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the webhook.                                                                                                            |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The webhook's name.                                                                                                               |
| `description`                                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The webhook's description.                                                                                                        |
| `url`                                                                                                                             | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The URL we call when a subscribed event occurs.                                                                                   |
| `eventTypes`                                                                                                                      | [operations.CreateWebhookEventTypeResponse](../../models/operations/create-webhook-event-type-response.md)[]                      | :heavy_check_mark:                                                                                                                | Event types this webhook subscribes to. Empty for legacy v1 webhooks, which subscribe via their single deprecated `type` instead. |
| `payloadVersion`                                                                                                                  | [operations.CreateWebhookPayloadVersion](../../models/operations/create-webhook-payload-version.md)                               | :heavy_check_mark:                                                                                                                | Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat shape and is read-only via this API.             |
| `createdAt`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The date the webhook was created.                                                                                                 |