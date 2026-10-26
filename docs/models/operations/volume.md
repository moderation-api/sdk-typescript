# Volume

## Example Usage

```typescript
import { Volume } from "@moderation-api/sdk/models/operations";

let value: Volume = {
  start: "<value>",
  requests: 586833,
  flagged: 580842,
  rejected: 918786,
  sentToReview: 978855,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `start`                                                  | *string*                                                 | :heavy_check_mark:                                       | Start of the bucket, as an ISO 8601 timestamp in UTC.    |
| `requests`                                               | *number*                                                 | :heavy_check_mark:                                       | Requests received in the bucket.                         |
| `flagged`                                                | *number*                                                 | :heavy_check_mark:                                       | Requests flagged in the bucket.                          |
| `rejected`                                               | *number*                                                 | :heavy_check_mark:                                       | Requests with the recommendation "reject" in the bucket. |
| `sentToReview`                                           | *number*                                                 | :heavy_check_mark:                                       | Requests with the recommendation "review" in the bucket. |