# GetAccountResponse

Account details retrieved successfully

## Example Usage

```typescript
import { GetAccountResponse } from "@moderation-api/sdk/models/operations";

let value: GetAccountResponse = {
  id: "<id>",
  paidPlanName: "<value>",
  textApiQuota: 6310.09,
  remainingQuota: 3438.77,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the account                                                       |
| `paidPlanName`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Name of the paid plan                                                   |
| `textApiQuota`                                                          | *number*                                                                | :heavy_check_mark:                                                      | Text API quota                                                          |
| `remainingQuota`                                                        | *number*                                                                | :heavy_check_mark:                                                      | Remaining quota                                                         |
| `currentProject`                                                        | [operations.CurrentProject](../../models/operations/current-project.md) | :heavy_minus_sign:                                                      | N/A                                                                     |