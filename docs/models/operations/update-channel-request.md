# UpdateChannelRequest

## Example Usage

```typescript
import { UpdateChannelRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateChannelRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the channel to update.                                                              |
| `body`                                                                                        | [operations.UpdateChannelRequestBody](../../models/operations/update-channel-request-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |