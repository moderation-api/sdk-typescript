# ListQueueItemsResponseBody

Successful response

## Example Usage

```typescript
import { ListQueueItemsResponseBody } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsResponseBody = {
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
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [operations.ListQueueItemsData](../../models/operations/list-queue-items-data.md)[] | :heavy_check_mark:                                                                  | The items on this page.                                                             |
| `pagination`                                                                        | [models.Pagination](../../models/pagination.md)                                     | :heavy_check_mark:                                                                  | Where this page is in the full list.                                                |