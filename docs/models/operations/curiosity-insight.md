# CuriosityInsight

Curiosity insight. Attempts to clarify or ask follow-up questions to better understand another person or idea.

## Example Usage

```typescript
import { CuriosityInsight } from "@moderation-api/sdk/models/operations";

let value: CuriosityInsight = {
  id: "curiosity",
  type: "insight",
  probability: 8213.82,
  value: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *"curiosity"*                        | :heavy_check_mark:                   | N/A                                  |
| `type`                               | *"insight"*                          | :heavy_check_mark:                   | N/A                                  |
| `probability`                        | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `value`                              | *boolean*                            | :heavy_check_mark:                   | Whether the content shows curiosity. |