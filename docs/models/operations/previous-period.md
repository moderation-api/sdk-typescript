# PreviousPeriod

The same counts for the window of equal length just before this one. Compare with `totals` to see the trend.

## Example Usage

```typescript
import { PreviousPeriod } from "@moderation-api/sdk/models/operations";

let value: PreviousPeriod = {
  requests: 678062,
  flagged: 277299,
  flagRate: 564.59,
  allowed: 694147,
  rejected: 664660,
  sentToReview: 880678,
  handledAutomatically: 881700,
  flaggedButAllowed: 286973,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `requests`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Requests received. Every request counts, also repeats and edits of the same content.                             |
| `flagged`                                                                                                        | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Requests that were flagged.                                                                                      |
| `flagRate`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The share of requests that were flagged: flagged / requests. 0 when there were no requests.                      |
| `allowed`                                                                                                        | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Requests with the recommendation "allow". Includes content that was not flagged.                                 |
| `rejected`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Requests with the recommendation "reject". All of them were flagged.                                             |
| `sentToReview`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Requests with the recommendation "review". This counts requests, not the deduplicated items in the review queue. |
| `handledAutomatically`                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Flagged requests that were settled without human review: rejected plus flaggedButAllowed.                        |
| `flaggedButAllowed`                                                                                              | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Flagged requests that were allowed without human review.                                                         |