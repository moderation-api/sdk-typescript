# ListProjectsResponseBody

Projects retrieved successfully

## Example Usage

```typescript
import { ListProjectsResponseBody } from "@moderation-api/sdk/models/operations";

let value: ListProjectsResponseBody = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      description:
        "fiercely given while now vivaciously patroller yippee absent considering during",
      domain: "writhing-step.com",
      context: "<value>",
      globalFlaggingMode: "DRY_RUN",
      enableRequestLogging: false,
      casebookEnabled: false,
      createdAt: "1704304707111",
      updatedAt: "1735636176671",
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

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `data`                                          | [models.Project](../../models/project.md)[]     | :heavy_check_mark:                              | The items on this page.                         |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | Where this page is in the full list.            |