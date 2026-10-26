# GetAnalyticsChannelsResponse

Successful response

## Example Usage

```typescript
import { GetAnalyticsChannelsResponse } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsChannelsResponse = {
  range: "90d",
  channels: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                          | [operations.GetAnalyticsChannelsRangeResponse](../../models/operations/get-analytics-channels-range-response.md) | :heavy_check_mark:                                                                                               | The time window of the numbers.                                                                                  |
| `channels`                                                                                                       | [operations.Channel](../../models/operations/channel.md)[]                                                       | :heavy_check_mark:                                                                                               | Requests and flags per channel. Channels with no requests in the window are not included.                        |