# TopAction

## Example Usage

```typescript
import { TopAction } from "@moderation-api/sdk/models/operations";

let value: TopAction = {
  actionId: "<id>",
  actionName: "<value>",
  count: 605.8,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `actionId`                           | *string*                             | :heavy_check_mark:                   | Most used action by this reviewer    |
| `actionName`                         | *string*                             | :heavy_check_mark:                   | Name of the most used action         |
| `count`                              | *number*                             | :heavy_check_mark:                   | Number of times this action was used |