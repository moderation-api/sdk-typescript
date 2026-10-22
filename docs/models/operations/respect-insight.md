# RespectInsight

Respect insight. Shows deference or appreciation to others, or acknowledges the validity of another person.

## Example Usage

```typescript
import { RespectInsight } from "@moderation-api/sdk/models/operations";

let value: RespectInsight = {
  id: "respect",
  type: "insight",
  probability: 5986.42,
  value: false,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *"respect"*                        | :heavy_check_mark:                 | N/A                                |
| `type`                             | *"insight"*                        | :heavy_check_mark:                 | N/A                                |
| `probability`                      | *number*                           | :heavy_check_mark:                 | N/A                                |
| `value`                            | *boolean*                          | :heavy_check_mark:                 | Whether the content shows respect. |