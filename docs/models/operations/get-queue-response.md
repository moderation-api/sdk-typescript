# GetQueueResponse

Successful response

## Example Usage

```typescript
import { GetQueueResponse } from "@moderation-api/sdk/models/operations";

let value: GetQueueResponse = {
  queue: {
    id: "<id>",
    name: "<value>",
    description: null,
    isDefault: true,
    unresolvedItemsCount: 120098,
    resolvedItemsCount: 340268,
    totalItemsCount: 340987,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `queue`                                                     | [models.QueueWithCounts](../../models/queue-with-counts.md) | :heavy_check_mark:                                          | N/A                                                         |