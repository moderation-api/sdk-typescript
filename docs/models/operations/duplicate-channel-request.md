# DuplicateChannelRequest

## Example Usage

```typescript
import { DuplicateChannelRequest } from "@moderation-api/sdk/models/operations";

let value: DuplicateChannelRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the channel to copy.                                                                      |
| `body`                                                                                              | [operations.DuplicateChannelRequestBody](../../models/operations/duplicate-channel-request-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |