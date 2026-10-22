# ListQueueItemsAction

## Example Usage

```typescript
import { ListQueueItemsAction } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsAction = {
  id: "<id>",
  name: "<value>",
  timestamp: 9860.52,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Action ID                                   |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | Action name                                 |
| `comment`                                   | *string*                                    | :heavy_minus_sign:                          | Action comment                              |
| `timestamp`                                 | *number*                                    | :heavy_check_mark:                          | Unix timestamp of when the action was taken |
| `reviewer`                                  | *string*                                    | :heavy_minus_sign:                          | Moderator userID                            |