# ResolveQueueItemRequest

## Example Usage

```typescript
import { ResolveQueueItemRequest } from "@moderation-api/sdk/models/operations";

let value: ResolveQueueItemRequest = {
  id: "<id>",
  itemId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The queue ID                                                                                         |
| `itemId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | The item ID to resolve                                                                               |
| `body`                                                                                               | [operations.ResolveQueueItemRequestBody](../../models/operations/resolve-queue-item-request-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |