# ListQueueItemsResponse

## Example Usage

```typescript
import { ListQueueItemsResponse } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsResponse = {
  result: {
    data: [
      {
        id: "<id>",
        content: "<value>",
        labels: [
          {
            label: "<value>",
            score: 7651.06,
            flagged: false,
          },
        ],
        flagged: true,
        status: "resolved",
        timestamp: 9550.55,
      },
    ],
    pagination: {
      page: 335492,
      pageSize: 148408,
      total: 57774,
      totalPages: 915803,
      hasMore: false,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListQueueItemsResponseBody](../../models/operations/list-queue-items-response-body.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |