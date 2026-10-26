# ResolveQueueItemsRequestBody

## Example Usage

```typescript
import { ResolveQueueItemsRequestBody } from "@moderation-api/sdk/models/operations";

let value: ResolveQueueItemsRequestBody = {
  itemIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `itemIds`                           | *string*[]                          | :heavy_check_mark:                  | The item IDs to resolve. Up to 100. |