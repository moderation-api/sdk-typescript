# FilterLabel

## Example Usage

```typescript
import { FilterLabel } from "@moderation-api/sdk/models/operations";

let value: FilterLabel = {
  label: "<value>",
  type: "FLAGGED",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `label`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [operations.GetQueueType](../../models/operations/get-queue-type.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `minThreshold`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `maxThreshold`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |