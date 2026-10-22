# ListActionsResponse

## Example Usage

```typescript
import { ListActionsResponse } from "@moderation-api/sdk/models/operations";

let value: ListActionsResponse = {
  result: {
    data: [
      {
        id: "<id>",
        createdAt: "1721523690413",
        name: "<value>",
        filterInQueueIds: [],
        possibleValues: [
          {
            value: "<value>",
          },
        ],
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [operations.ListActionsResponseBody](../../models/operations/list-actions-response-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |