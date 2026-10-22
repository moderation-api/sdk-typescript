# ListWordlistsResponse

## Example Usage

```typescript
import { ListWordlistsResponse } from "@moderation-api/sdk/models/operations";

let value: ListWordlistsResponse = {
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `result`                                                                                        | [operations.ListWordlistsResponseBody](../../models/operations/list-wordlists-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |