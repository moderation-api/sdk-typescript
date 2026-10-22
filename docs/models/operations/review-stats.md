# ReviewStats

## Example Usage

```typescript
import { ReviewStats } from "@moderation-api/sdk/models/operations";

let value: ReviewStats = {
  averageTimeToReview: 5134.09,
  totalReviewed: 2591.46,
  totalPending: 9962.95,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `averageTimeToReview`                          | *number*                                       | :heavy_check_mark:                             | Average time in milliseconds to review an item |
| `totalReviewed`                                | *number*                                       | :heavy_check_mark:                             | Total number of items reviewed                 |
| `totalPending`                                 | *number*                                       | :heavy_check_mark:                             | Total number of items pending review           |