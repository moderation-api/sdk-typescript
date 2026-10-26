# ListQueueItemsResponseBody

Successful response

## Example Usage

```typescript
import { ListQueueItemsResponseBody } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsResponseBody = {
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
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `data`                                           | [models.QueueItem](../../models/queue-item.md)[] | :heavy_check_mark:                               | The items on this page.                          |
| `pagination`                                     | [models.Pagination](../../models/pagination.md)  | :heavy_check_mark:                               | Where this page is in the full list.             |