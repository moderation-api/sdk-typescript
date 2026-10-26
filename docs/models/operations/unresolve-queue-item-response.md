# UnresolveQueueItemResponse

Successful response

## Example Usage

```typescript
import { UnresolveQueueItemResponse } from "@moderation-api/sdk/models/operations";

let value: UnresolveQueueItemResponse = {
  success: true,
  status: "pending",
  unresolvedAt: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.UnresolveQueueItemStatus](../../models/operations/unresolve-queue-item-status.md) | :heavy_check_mark:                                                                            | `pending` waits for review. `resolved` is reviewed.                                           |
| `unresolvedAt`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | When the item was unresolved (ISO 8601).                                                      |