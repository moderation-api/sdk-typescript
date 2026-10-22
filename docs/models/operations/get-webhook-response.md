# GetWebhookResponse

Webhook retrieved successfully

## Example Usage

```typescript
import { GetWebhookResponse } from "@moderation-api/sdk/models/operations";

let value: GetWebhookResponse = {
  id: "<id>",
  name: "<value>",
  url: "https://cool-hamburger.biz/",
  eventTypes: [],
  payloadVersion: "V2",
  createdAt: "1705508947484",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the webhook.                                                                                                            |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The webhook's name.                                                                                                               |
| `description`                                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The webhook's description.                                                                                                        |
| `url`                                                                                                                             | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The URL we call when a subscribed event occurs.                                                                                   |
| `eventTypes`                                                                                                                      | [operations.GetWebhookEventType](../../models/operations/get-webhook-event-type.md)[]                                             | :heavy_check_mark:                                                                                                                | Event types this webhook subscribes to. Empty for legacy v1 webhooks, which subscribe via their single deprecated `type` instead. |
| `payloadVersion`                                                                                                                  | [operations.GetWebhookPayloadVersion](../../models/operations/get-webhook-payload-version.md)                                     | :heavy_check_mark:                                                                                                                | Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat shape and is read-only via this API.             |
| `createdAt`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The date the webhook was created.                                                                                                 |