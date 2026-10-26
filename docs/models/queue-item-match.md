# QueueItemMatch

## Example Usage

```typescript
import { QueueItemMatch } from "@moderation-api/sdk/models";

let value: QueueItemMatch = {
  match: "<value>",
  probability: 5602.27,
  span: [
    9147.06,
    2646.74,
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `match`                                                    | *string*                                                   | :heavy_check_mark:                                         | The matched substring                                      |
| `probability`                                              | *number*                                                   | :heavy_check_mark:                                         | Match confidence between 0 and 1                           |
| `span`                                                     | *number*[]                                                 | :heavy_check_mark:                                         | [start, end] character offsets in the source text          |
| `mask`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `reasons`                                                  | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `signals`                                                  | [models.QueueItemSignals](../models/queue-item-signals.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `entityType`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `scripts`                                                  | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `skeleton`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |