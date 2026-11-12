# QueueItem

## Example Usage

```typescript
import { QueueItem } from "@moderation-api/sdk/models";

let value: QueueItem = {
  id: "<id>",
  contentId: "<id>",
  content: {
    type: "video",
    url: "https://sinful-scorn.org",
  },
  labels: [
    {
      label: "<value>",
      score: 9550.55,
    },
  ],
  flagged: false,
  severity: 716.36,
  status: "pending",
  timestamp: 8468.02,
  language: "<value>",
  conversationId: "<id>",
  authorId: "<id>",
  contentType: "<value>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The item ID: the ID of this submission. Use it, or `contentId`, to resolve or unresolve the item in this queue.                       |
| `contentId`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Your content ID, as you sent it to `POST /moderate`. Webhooks send it as `item.id`. The resolve endpoints accept it in place of `id`. |
| `content`                                                                                                                             | *models.QueueItemContent*                                                                                                             | :heavy_check_mark:                                                                                                                    | The submitted content.                                                                                                                |
| `labels`                                                                                                                              | [models.Label](../models/label.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                    | The moderation labels of the content.                                                                                                 |
| `flagged`                                                                                                                             | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | Whether moderation flagged the content.                                                                                               |
| `severity`                                                                                                                            | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Severity score from 0 to 1, if available.                                                                                             |
| `status`                                                                                                                              | [models.QueueItemStatus](../models/queue-item-status.md)                                                                              | :heavy_check_mark:                                                                                                                    | `pending` waits for review. `resolved` is reviewed.                                                                                   |
| `timestamp`                                                                                                                           | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | When the content was submitted, as Unix time in milliseconds.                                                                         |
| `language`                                                                                                                            | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Detected ISO language code.                                                                                                           |
| `conversationId`                                                                                                                      | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Conversation ID, if any.                                                                                                              |
| `authorId`                                                                                                                            | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Your author ID, if any.                                                                                                               |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Content type, for example `message` or `profile`.                                                                                     |