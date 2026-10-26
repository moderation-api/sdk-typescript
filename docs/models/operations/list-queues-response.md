# ListQueuesResponse

## Example Usage

```typescript
import { ListQueuesResponse } from "@moderation-api/sdk/models/operations";

let value: ListQueuesResponse = {
  result: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        description:
          "baggy jot sans tenderly while fork cuckoo miserable where",
        isDefault: false,
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `result`                                                                                  | [operations.ListQueuesResponseBody](../../models/operations/list-queues-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |