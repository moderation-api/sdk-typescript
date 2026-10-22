# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateWebhookRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the webhook to update.                                                              |
| `body`                                                                                        | [operations.UpdateWebhookRequestBody](../../models/operations/update-webhook-request-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |