# ListQueueItemsData

## Example Usage

```typescript
import { ListQueueItemsData } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsData = {
  id: "<id>",
  content: "<value>",
  labels: [
    {
      label: "<value>",
      score: 7651.06,
      flagged: false,
    },
  ],
  flagged: false,
  status: "pending",
  timestamp: 6097.53,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Content ID                                                                              |
| `content`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The content to be moderated                                                             |
| `language`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | Content language                                                                        |
| `labels`                                                                                | [operations.ListQueueItemsLabel](../../models/operations/list-queue-items-label.md)[]   | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `conversationId`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | Conversation ID                                                                         |
| `authorId`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | Author ID                                                                               |
| `actions`                                                                               | [operations.ListQueueItemsAction](../../models/operations/list-queue-items-action.md)[] | :heavy_minus_sign:                                                                      | Action IDs taken on this item                                                           |
| `flagged`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether the item is flagged by any label                                                |
| `status`                                                                                | [operations.ListQueueItemsStatus](../../models/operations/list-queue-items-status.md)   | :heavy_check_mark:                                                                      | Status of the item                                                                      |
| `timestamp`                                                                             | *number*                                                                                | :heavy_check_mark:                                                                      | Unix timestamp of when the item was created                                             |
| `contentType`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Type of the content object                                                              |