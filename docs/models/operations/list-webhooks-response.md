# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "@moderation-api/sdk/models/operations";

let value: ListWebhooksResponse = {
  result: {
    data: [],
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `result`                                                                                      | [operations.ListWebhooksResponseBody](../../models/operations/list-webhooks-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |