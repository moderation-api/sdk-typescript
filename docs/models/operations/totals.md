# Totals

Request counts for the window. A flagged request has one recommendation: allow, reject or review.

## Example Usage

```typescript
import { Totals } from "@moderation-api/sdk/models/operations";

let value: Totals = {
  requests: 299586,
  flagged: 873533,
  flagRate: 2329.4,
  allowed: 90248,
  rejected: 565808,
  sentToReview: 553330,
  handledAutomatically: 732255,
  flaggedButAllowed: 818361,
  distinctAuthors: 92764,
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
| `distinctAuthors`                                                                                                | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Distinct authors that sent content in the window. Approximate.                                                   |