# UpdateWebhookResponse

Webhook updated successfully

## Example Usage

```typescript
import { UpdateWebhookResponse } from "@moderation-api/sdk/models/operations";

let value: UpdateWebhookResponse = {
  id: "<id>",
  name: "<value>",
  url: "https://spanish-skeleton.name",
  eventTypes: [
    "QUEUE_ITEM_ALLOWED",
  ],
  payloadVersion: "V1",
  createdAt: "1732307785269",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the webhook.                                                                                                            |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The webhook's name.                                                                                                               |
| `description`                                                                                                                     | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The webhook's description.                                                                                                        |
| `url`                                                                                                                             | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The URL we call when a subscribed event occurs.                                                                                   |
| `eventTypes`                                                                                                                      | [operations.UpdateWebhookEventTypeResponse](../../models/operations/update-webhook-event-type-response.md)[]                      | :heavy_check_mark:                                                                                                                | Event types this webhook subscribes to. Empty for legacy v1 webhooks, which subscribe via their single deprecated `type` instead. |
| `payloadVersion`                                                                                                                  | [operations.UpdateWebhookPayloadVersion](../../models/operations/update-webhook-payload-version.md)                               | :heavy_check_mark:                                                                                                                | Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat shape and is read-only via this API.             |
| `createdAt`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The date the webhook was created.                                                                                                 |