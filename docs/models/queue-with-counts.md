# QueueWithCounts

## Example Usage

```typescript
import { QueueWithCounts } from "@moderation-api/sdk/models";

let value: QueueWithCounts = {
  id: "<id>",
  name: "<value>",
  description: "kick hm freely",
  isDefault: false,
  unresolvedItemsCount: 413400,
  resolvedItemsCount: 766647,
  totalItemsCount: 525372,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | The queue ID.                                          |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | The queue name.                                        |
| `description`                                          | *string*                                               | :heavy_check_mark:                                     | The queue description.                                 |
| `isDefault`                                            | *boolean*                                              | :heavy_check_mark:                                     | Whether this is the default queue of the project.      |
| `unresolvedItemsCount`                                 | *number*                                               | :heavy_check_mark:                                     | Number of items that wait for review.                  |
| `resolvedItemsCount`                                   | *number*                                               | :heavy_check_mark:                                     | Number of items that are resolved.                     |
| `totalItemsCount`                                      | *number*                                               | :heavy_check_mark:                                     | Number of items in the queue, resolved and unresolved. |