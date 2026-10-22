# SentimentInsight

Sentiment insight

## Example Usage

```typescript
import { SentimentInsight } from "@moderation-api/sdk/models/operations";

let value: SentimentInsight = {
  id: "sentiment",
  type: "insight",
  probability: 3638.06,
  value: "neutral",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *"sentiment"*                                                                                                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `type`                                                                                                          | *"insight"*                                                                                                     | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `probability`                                                                                                   | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `value`                                                                                                         | [operations.Value](../../models/operations/value.md)                                                            | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `scores`                                                                                                        | [operations.Scores](../../models/operations/scores.md)                                                          | :heavy_minus_sign:                                                                                              | Positive and negative scored independently: mixed content scores high on both. Present whenever `value` is set. |