# URLMasking

## Example Usage

```typescript
import { URLMasking } from "@moderation-api/sdk/models/operations";

let value: URLMasking = {
  id: "url",
  entities: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *"url"*                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |
| `entities`                                                                   | Record<string, [operations.Entities2](../../models/operations/entities2.md)> | :heavy_check_mark:                                                           | N/A                                                                          |