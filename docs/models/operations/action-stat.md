# ActionStat

## Example Usage

```typescript
import { ActionStat } from "@moderation-api/sdk/models/operations";

let value: ActionStat = {
  actionId: "<id>",
  actionName: "<value>",
  count: 215.41,
  percentageOfTotal: 1522.88,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `actionId`                                       | *string*                                         | :heavy_check_mark:                               | ID of the moderation action                      |
| `actionName`                                     | *string*                                         | :heavy_check_mark:                               | Name of the moderation action                    |
| `count`                                          | *number*                                         | :heavy_check_mark:                               | Number of times this action was taken            |
| `percentageOfTotal`                              | *number*                                         | :heavy_check_mark:                               | Percentage this action represents of all actions |