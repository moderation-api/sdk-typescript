# TopReviewer

## Example Usage

```typescript
import { TopReviewer } from "@moderation-api/sdk/models/operations";

let value: TopReviewer = {
  userId: "<id>",
  name: "<value>",
  reviewCount: 3747.23,
  averageTimePerReview: 3548.02,
  topActions: [],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `userId`                                                        | *string*                                                        | :heavy_check_mark:                                              | ID of the reviewer                                              |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | Name of the reviewer                                            |
| `reviewCount`                                                   | *number*                                                        | :heavy_check_mark:                                              | Number of items reviewed                                        |
| `averageTimePerReview`                                          | *number*                                                        | :heavy_check_mark:                                              | Average review time in milliseconds                             |
| `accuracyScore`                                                 | *number*                                                        | :heavy_minus_sign:                                              | Optional accuracy score based on review quality metrics         |
| `topActions`                                                    | [operations.TopAction](../../models/operations/top-action.md)[] | :heavy_check_mark:                                              | Most common actions taken by this reviewer                      |