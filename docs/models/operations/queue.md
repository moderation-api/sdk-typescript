# Queue

## Example Usage

```typescript
import { Queue } from "@moderation-api/sdk/models/operations";

let value: Queue = {
  id: "<id>",
  name: "<value>",
  description: "except boohoo draft",
  filter: {},
  unresolvedItemsCount: 6843.26,
  resolvedItemsCount: 2678.59,
  totalItemsCount: 3719.24,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `filter`                                               | [operations.Filter](../../models/operations/filter.md) | :heavy_check_mark:                                     | N/A                                                    |
| `unresolvedItemsCount`                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `resolvedItemsCount`                                   | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalItemsCount`                                      | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |