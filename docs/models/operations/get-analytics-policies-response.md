# GetAnalyticsPoliciesResponse

Successful response

## Example Usage

```typescript
import { GetAnalyticsPoliciesResponse } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsPoliciesResponse = {
  range: "7d",
  channelId: "<id>",
  policies: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                          | [operations.GetAnalyticsPoliciesRangeResponse](../../models/operations/get-analytics-policies-range-response.md) | :heavy_check_mark:                                                                                               | The time window of the numbers.                                                                                  |
| `channelId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The channel the numbers are for. Null when they are for all channels.                                            |
| `policies`                                                                                                       | [operations.GetAnalyticsPoliciesPolicy](../../models/operations/get-analytics-policies-policy.md)[]              | :heavy_check_mark:                                                                                               | The policy labels with the most flagged requests, largest first.                                                 |