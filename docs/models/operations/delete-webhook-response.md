# DeleteWebhookResponse

Webhook deleted successfully

## Example Usage

```typescript
import { DeleteWebhookResponse } from "@moderation-api/sdk/models/operations";

let value: DeleteWebhookResponse = {
  deleted: true,
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `deleted`                        | *boolean*                        | :heavy_check_mark:               | Whether the webhook was deleted. |
| `id`                             | *string*                         | :heavy_check_mark:               | The ID of the webhook.           |