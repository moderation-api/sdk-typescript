# ListQueueItemsResponse

## Example Usage

```typescript
import { ListQueueItemsResponse } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsResponse = {
  result: {
    data: [
      {
        id: "<id>",
        contentId: "<id>",
        content: {
          type: "text",
          text: "<value>",
        },
        labels: [
          {
            label: "<value>",
            score: 9550.55,
          },
        ],
        flagged: true,
        severity: 2551.88,
        status: "pending",
        timestamp: 2968.32,
        language: "<value>",
        conversationId: "<id>",
        authorId: "<id>",
        contentType: "<value>",
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