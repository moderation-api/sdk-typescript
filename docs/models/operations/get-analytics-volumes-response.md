# GetAnalyticsVolumesResponse

Successful response

## Example Usage

```typescript
import { GetAnalyticsVolumesResponse } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsVolumesResponse = {
  range: "7d",
  channelId: "<id>",
  bucket: "hour",
  volumes: [
    {
      start: "<value>",
      requests: 729318,
      flagged: 667937,
      rejected: 663382,
      sentToReview: 881734,
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                        | [operations.GetAnalyticsVolumesRangeResponse](../../models/operations/get-analytics-volumes-range-response.md) | :heavy_check_mark:                                                                                             | The time window of the numbers.                                                                                |
| `channelId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The channel the numbers are for. Null when they are for all channels.                                          |
| `bucket`                                                                                                       | [operations.Bucket](../../models/operations/bucket.md)                                                         | :heavy_check_mark:                                                                                             | The size of each entry in `volumes`.                                                                           |
| `volumes`                                                                                                      | [operations.Volume](../../models/operations/volume.md)[]                                                       | :heavy_check_mark:                                                                                             | Counts over time, oldest first. Buckets with no requests are included with zeros.                              |