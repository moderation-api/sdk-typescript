# CompassionInsight

Compassion insight. Identifies with or shows concern, empathy, or support for the feelings/emotions of others.

## Example Usage

```typescript
import { CompassionInsight } from "@moderation-api/sdk/models/operations";

let value: CompassionInsight = {
  id: "compassion",
  type: "insight",
  probability: 7149.19,
  value: false,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *"compassion"*                        | :heavy_check_mark:                    | N/A                                   |
| `type`                                | *"insight"*                           | :heavy_check_mark:                    | N/A                                   |
| `probability`                         | *number*                              | :heavy_check_mark:                    | N/A                                   |
| `value`                               | *boolean*                             | :heavy_check_mark:                    | Whether the content shows compassion. |