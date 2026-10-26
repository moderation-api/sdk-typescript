# DailyReviewCount

## Example Usage

```typescript
import { DailyReviewCount } from "@moderation-api/sdk/models/operations";

let value: DailyReviewCount = {
  date: "2024-04-26",
  count: 845425,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `date`                           | *string*                         | :heavy_check_mark:               | Date in YYYY-MM-DD format (UTC). |
| `count`                          | *number*                         | :heavy_check_mark:               | Number of items resolved.        |