# GetAnalyticsAuthorsResponse

Successful response

## Example Usage

```typescript
import { GetAnalyticsAuthorsResponse } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsAuthorsResponse = {
  range: "90d",
  channelId: "<id>",
  authors: [
    {
      authorId: "<id>",
      name: "<value>",
      flagged: 179965,
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `range`                                                                                                        | [operations.GetAnalyticsAuthorsRangeResponse](../../models/operations/get-analytics-authors-range-response.md) | :heavy_check_mark:                                                                                             | The time window of the numbers.                                                                                |
| `channelId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The channel the numbers are for. Null when they are for all channels.                                          |
| `authors`                                                                                                      | [operations.GetAnalyticsAuthorsAuthor](../../models/operations/get-analytics-authors-author.md)[]              | :heavy_check_mark:                                                                                             | The authors with the most flagged requests, largest first. Requests without an author are not included.        |