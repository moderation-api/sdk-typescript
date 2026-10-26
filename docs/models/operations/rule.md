# Rule

## Example Usage

```typescript
import { Rule } from "@moderation-api/sdk/models/operations";

let value: Rule = {
  name: "<value>",
  count: 379695,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The rule name. "Other rules" holds all rules after the largest ones. |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Flagged requests that this rule settled.                             |