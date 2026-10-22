# ListAuthorsResponseBody

Successful response

## Example Usage

```typescript
import { ListAuthorsResponseBody } from "@moderation-api/sdk/models/operations";

let value: ListAuthorsResponseBody = {
  data: [
    {
      id: "<id>",
      firstSeen: 1778.26,
      lastSeen: 3367.68,
      status: "enabled",
      trustLevel: {
        level: 7232.5,
        manual: false,
      },
      block: {},
      riskEvaluation: {},
      metrics: {
        totalContent: 9757.29,
        flaggedContent: 2175.36,
      },
      metadata: {},
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [models.PublicAuthor](../../models/public-author.md)[] | :heavy_check_mark:                                     | The items on this page.                                |
| `pagination`                                           | [models.Pagination](../../models/pagination.md)        | :heavy_check_mark:                                     | Where this page is in the full list.                   |