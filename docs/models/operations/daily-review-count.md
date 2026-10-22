# DailyReviewCount

## Example Usage

```typescript
import { DailyReviewCount } from "@moderation-api/sdk/models/operations";

let value: DailyReviewCount = {
  date: "2024-04-26",
  count: 8454.25,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `date`                         | *string*                       | :heavy_check_mark:             | Date in YYYY-MM-DD format      |
| `count`                        | *number*                       | :heavy_check_mark:             | Number of reviews on this date |