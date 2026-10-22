# ListQueueItemsLabel

## Example Usage

```typescript
import { ListQueueItemsLabel } from "@moderation-api/sdk/models/operations";

let value: ListQueueItemsLabel = {
  label: "<value>",
  score: 1816.52,
  flagged: false,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `label`                          | *string*                         | :heavy_check_mark:               | Label name                       |
| `score`                          | *number*                         | :heavy_check_mark:               | Confidence score of the label    |
| `flagged`                        | *boolean*                        | :heavy_check_mark:               | Whether this label caused a flag |