# Trends

## Example Usage

```typescript
import { Trends } from "@moderation-api/sdk/models/operations";

let value: Trends = {
  dailyReviewCounts: [],
  flaggedContentTrends: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dailyReviewCounts`                                                                  | [operations.DailyReviewCount](../../models/operations/daily-review-count.md)[]       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `flaggedContentTrends`                                                               | [operations.FlaggedContentTrend](../../models/operations/flagged-content-trend.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |