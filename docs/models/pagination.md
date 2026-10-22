# Pagination

Where this page is in the full list.

## Example Usage

```typescript
import { Pagination } from "@moderation-api/sdk/models";

let value: Pagination = {
  page: 271635,
  pageSize: 56105,
  total: 536064,
  totalPages: 64883,
  hasMore: true,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `page`                           | *number*                         | :heavy_check_mark:               | The current page, starting at 1. |
| `pageSize`                       | *number*                         | :heavy_check_mark:               | Number of items per page.        |
| `total`                          | *number*                         | :heavy_check_mark:               | Total number of items.           |
| `totalPages`                     | *number*                         | :heavy_check_mark:               | Total number of pages.           |
| `hasMore`                        | *boolean*                        | :heavy_check_mark:               | Whether there is a next page.    |