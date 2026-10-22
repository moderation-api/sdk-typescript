# ListWebhooksResponseBody

Webhooks retrieved successfully

## Example Usage

```typescript
import { ListWebhooksResponseBody } from "@moderation-api/sdk/models/operations";

let value: ListWebhooksResponseBody = {
  data: [],
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.ListWebhooksData](../../models/operations/list-webhooks-data.md)[] | :heavy_check_mark:                                                             | The items on this page.                                                        |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_check_mark:                                                             | Where this page is in the full list.                                           |