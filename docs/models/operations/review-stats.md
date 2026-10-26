# ReviewStats

## Example Usage

```typescript
import { ReviewStats } from "@moderation-api/sdk/models/operations";

let value: ReviewStats = {
  totalReviewed: 513409,
  totalPending: 259146,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `totalReviewed`                                                   | *number*                                                          | :heavy_check_mark:                                                | Number of items resolved in this queue in the period.             |
| `totalPending`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of items submitted in the period that wait for review now. |