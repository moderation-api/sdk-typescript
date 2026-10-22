# DeleteChannelResponse

Channel deleted successfully

## Example Usage

```typescript
import { DeleteChannelResponse } from "@moderation-api/sdk/models/operations";

let value: DeleteChannelResponse = {
  deleted: false,
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `deleted`                        | *boolean*                        | :heavy_check_mark:               | Whether the channel was deleted. |
| `id`                             | *string*                         | :heavy_check_mark:               | The ID of the channel.           |