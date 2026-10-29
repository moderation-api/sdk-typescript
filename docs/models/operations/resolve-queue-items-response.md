# ResolveQueueItemsResponse

Successful response

## Example Usage

```typescript
import { ResolveQueueItemsResponse } from "@moderation-api/sdk/models/operations";

let value: ResolveQueueItemsResponse = {
  resolved: 270113,
  notFoundIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `resolved`                                                          | *number*                                                            | :heavy_check_mark:                                                  | Number of items resolved.                                           |
| `notFoundIds`                                                       | *string*[]                                                          | :heavy_check_mark:                                                  | IDs from `itemIds` that match no item or content ID in the project. |