# Trends

## Example Usage

```typescript
import { Trends } from "@moderation-api/sdk/models/operations";

let value: Trends = {
  dailyReviewCounts: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dailyReviewCounts`                                                            | [operations.DailyReviewCount](../../models/operations/daily-review-count.md)[] | :heavy_check_mark:                                                             | Resolved items per day. Days with no reviews are left out.                     |