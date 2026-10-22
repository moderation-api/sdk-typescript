# EntityMatcherOutput

Entity matcher policy.

## Example Usage

```typescript
import { EntityMatcherOutput } from "@moderation-api/sdk/models/operations";

let value: EntityMatcherOutput = {
  id: "<id>",
  type: "entity_matcher",
  probability: 7358.02,
  flagged: false,
  matches: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | *"entity_matcher"*                                     | :heavy_check_mark:                                     | N/A                                                    |
| `probability`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `flagged`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `flaggedFields`                                        | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `matches`                                              | [operations.Match](../../models/operations/match.md)[] | :heavy_check_mark:                                     | N/A                                                    |