# GetAnalyticsSummaryResponse

Successful response

## Example Usage

```typescript
import { GetAnalyticsSummaryResponse } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsSummaryResponse = {
  range: "30d",
  channelId: "<id>",
  totals: {
    requests: 789439,
    flagged: 789288,
    flagRate: 5698.19,
    allowed: 734790,
    rejected: 197732,
    sentToReview: 95950,
    handledAutomatically: 457645,
    flaggedButAllowed: 433985,
    distinctAuthors: 767900,
  },
  previousPeriod: {
    requests: 797890,
    flagged: 628486,
    flagRate: 8967.36,
    allowed: 771785,
    rejected: 353129,
    sentToReview: 147782,
    handledAutomatically: 773644,
    flaggedButAllowed: 615674,
  },
  pendingReview: 452057,
  flagRateSpike: {
    multiple: 3439.81,
    recentFlagRate: 8141.03,
    baselineFlagRate: 9067.79,
    recentFlagged: 79611,
    recentRequests: 315181,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                                                                                                                                            | [operations.GetAnalyticsSummaryRangeResponse](../../models/operations/get-analytics-summary-range-response.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                 | The time window of the numbers.                                                                                                                                                                                                    |
| `channelId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | The channel the numbers are for. Null when they are for all channels.                                                                                                                                                              |
| `totals`                                                                                                                                                                                                                           | [operations.Totals](../../models/operations/totals.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                 | Request counts for the window. A flagged request has one recommendation: allow, reject or review.                                                                                                                                  |
| `previousPeriod`                                                                                                                                                                                                                   | [operations.PreviousPeriod](../../models/operations/previous-period.md)                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                 | The same counts for the window of equal length just before this one. Compare with `totals` to see the trend.                                                                                                                       |
| `pendingReview`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | Items in the default review queue that nobody has reviewed yet, counted as the queue counts them (repeats count once). The queue looks back 30 days, so older items are not included. The range does not change it.                |
| `flagRateSpike`                                                                                                                                                                                                                    | [operations.FlagRateSpike](../../models/operations/flag-rate-spike.md)                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                 | Set when the flag rate of the last 2 days is at least 2 times the rate of the 30 days before, with at least 50 flagged requests. Null when there is no spike. Always for the full project: the range and channel do not change it. |