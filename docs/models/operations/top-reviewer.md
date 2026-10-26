# TopReviewer

## Example Usage

```typescript
import { TopReviewer } from "@moderation-api/sdk/models/operations";

let value: TopReviewer = {
  userId: "<id>",
  name: "<value>",
  reviewCount: 318453,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `userId`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The user ID of the reviewer. `null` for items resolved with an API key. |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | The name of the reviewer.                                               |
| `reviewCount`                                                           | *number*                                                                | :heavy_check_mark:                                                      | Number of items the reviewer resolved in the period.                    |