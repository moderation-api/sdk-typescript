# Meta

Metadata about the moderation request

## Example Usage

```typescript
import { Meta } from "@moderation-api/sdk/models/operations";

let value: Meta = {
  status: "partial_success",
  timestamp: 8607.88,
  channelKey: "<value>",
  usage: 1743.87,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                 | [operations.MetaStatus](../../models/operations/meta-status.md)                                                          | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timestamp`                                                                                                              | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `channelKey`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique key of the channel where the content was handled. Either the channel provided by you or automatically routed. |
| `usage`                                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `processingTime`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |