# GetQueueStatsResponse

Successful response

## Example Usage

```typescript
import { GetQueueStatsResponse } from "@moderation-api/sdk/models/operations";

let value: GetQueueStatsResponse = {
  reviewStats: {
    averageTimeToReview: 2727.84,
    totalReviewed: 1836.69,
    totalPending: 2916.33,
  },
  actionStats: [
    {
      actionId: "<id>",
      actionName: "<value>",
      count: 5884.78,
      percentageOfTotal: 5129.76,
    },
  ],
  topReviewers: [
    {
      userId: "<id>",
      name: "<value>",
      reviewCount: 6229.9,
      averageTimePerReview: 9557.94,
      topActions: [],
    },
  ],
  trends: {
    dailyReviewCounts: [
      {
        date: "2024-12-05",
        count: 58.82,
      },
    ],
    flaggedContentTrends: [
      {
        label: "<value>",
        trend: 1814.78,
      },
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `reviewStats`                                                       | [operations.ReviewStats](../../models/operations/review-stats.md)   | :heavy_check_mark:                                                  | N/A                                                                 |
| `actionStats`                                                       | [operations.ActionStat](../../models/operations/action-stat.md)[]   | :heavy_check_mark:                                                  | N/A                                                                 |
| `topReviewers`                                                      | [operations.TopReviewer](../../models/operations/top-reviewer.md)[] | :heavy_check_mark:                                                  | List of top reviewers and their statistics                          |
| `trends`                                                            | [operations.Trends](../../models/operations/trends.md)              | :heavy_check_mark:                                                  | N/A                                                                 |