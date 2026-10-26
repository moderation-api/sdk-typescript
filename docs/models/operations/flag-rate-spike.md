# FlagRateSpike

## Example Usage

```typescript
import { FlagRateSpike } from "@moderation-api/sdk/models/operations";

let value: FlagRateSpike = {
  multiple: 6864.85,
  recentFlagRate: 6834.63,
  baselineFlagRate: 4818.31,
  recentFlagged: 179584,
  recentRequests: 580461,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `multiple`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | How many times higher the recent flag rate is than the baseline, for example 2.4. |
| `recentFlagRate`                                                                  | *number*                                                                          | :heavy_check_mark:                                                                | The flag rate in the last 2 days.                                                 |
| `baselineFlagRate`                                                                | *number*                                                                          | :heavy_check_mark:                                                                | The flag rate in the 30 days before that.                                         |
| `recentFlagged`                                                                   | *number*                                                                          | :heavy_check_mark:                                                                | Flagged requests in the last 2 days.                                              |
| `recentRequests`                                                                  | *number*                                                                          | :heavy_check_mark:                                                                | Requests in the last 2 days.                                                      |