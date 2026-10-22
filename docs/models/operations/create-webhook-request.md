# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@moderation-api/sdk/models/operations";

let value: CreateWebhookRequest = {
  name: "<value>",
  url: "https://passionate-season.net",
  eventTypes: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The webhook's name, used to identify it in the dashboard                                                   |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The webhook's description                                                                                  |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The webhook's URL. We'll call this URL when an event occurs.                                               |
| `eventTypes`                                                                                               | [operations.CreateWebhookEventTypeRequest](../../models/operations/create-webhook-event-type-request.md)[] | :heavy_check_mark:                                                                                         | Event types this webhook subscribes to. One webhook URL receives all events you list here.                 |