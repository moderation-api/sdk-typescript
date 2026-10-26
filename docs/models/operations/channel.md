# Channel

## Example Usage

```typescript
import { Channel } from "@moderation-api/sdk/models/operations";

let value: Channel = {
  id: "<id>",
  name: "<value>",
  requests: 343828,
  flagged: 704730,
  flagRate: 3554.49,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The channel ID.                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The channel name.                                                            |
| `requests`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | Requests received in this channel.                                           |
| `flagged`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Requests flagged in this channel.                                            |
| `flagRate`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | The share of requests in this channel that were flagged: flagged / requests. |