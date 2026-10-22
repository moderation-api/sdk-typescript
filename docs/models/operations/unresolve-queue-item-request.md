# UnresolveQueueItemRequest

## Example Usage

```typescript
import { UnresolveQueueItemRequest } from "@moderation-api/sdk/models/operations";

let value: UnresolveQueueItemRequest = {
  id: "<id>",
  itemId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The queue ID                                                                                             |
| `itemId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The item ID to unresolve                                                                                 |
| `body`                                                                                                   | [operations.UnresolveQueueItemRequestBody](../../models/operations/unresolve-queue-item-request-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |