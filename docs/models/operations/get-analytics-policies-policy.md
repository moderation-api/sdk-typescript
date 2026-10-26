# GetAnalyticsPoliciesPolicy

## Example Usage

```typescript
import { GetAnalyticsPoliciesPolicy } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsPoliciesPolicy = {
  label: "<value>",
  flagged: 663628,
  previousFlagged: 41854,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `label`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The policy label, for example `toxicity`.                                |
| `flagged`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | Flagged requests with this label in the window. Repeats count each time. |
| `previousFlagged`                                                        | *number*                                                                 | :heavy_check_mark:                                                       | Flagged requests with this label in the window of equal length before.   |