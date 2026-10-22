# PIIMasking

## Example Usage

```typescript
import { PIIMasking } from "@moderation-api/sdk/models/operations";

let value: PIIMasking = {
  id: "pii",
  entities: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *"pii"*                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |
| `entities`                                                                   | Record<string, [operations.Entities1](../../models/operations/entities1.md)> | :heavy_check_mark:                                                           | N/A                                                                          |