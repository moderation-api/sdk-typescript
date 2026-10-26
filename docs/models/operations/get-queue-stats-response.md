# GetQueueStatsResponse

Successful response

## Example Usage

```typescript
import { GetQueueStatsResponse } from "@moderation-api/sdk/models/operations";

let value: GetQueueStatsResponse = {
  reviewStats: {
    totalReviewed: 272784,
    totalPending: 183669,
  },
  topReviewers: [],
  trends: {
    dailyReviewCounts: [
      {
        date: "2024-08-03",
        count: 512976,
      },
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `reviewStats`                                                       | [operations.ReviewStats](../../models/operations/review-stats.md)   | :heavy_check_mark:                                                  | N/A                                                                 |
| `topReviewers`                                                      | [operations.TopReviewer](../../models/operations/top-reviewer.md)[] | :heavy_check_mark:                                                  | Reviewers with the most resolved items, most first. Up to 10.       |
| `trends`                                                            | [operations.Trends](../../models/operations/trends.md)              | :heavy_check_mark:                                                  | N/A                                                                 |