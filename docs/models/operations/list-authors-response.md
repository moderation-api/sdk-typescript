# ListAuthorsResponse

## Example Usage

```typescript
import { ListAuthorsResponse } from "@moderation-api/sdk/models/operations";

let value: ListAuthorsResponse = {
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [operations.ListAuthorsResponseBody](../../models/operations/list-authors-response-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |