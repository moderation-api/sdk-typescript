# CreateChannelRequest

## Example Usage

```typescript
import { CreateChannelRequest } from "@moderation-api/sdk/models/operations";

let value: CreateChannelRequest = {
  projectId: "<id>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the project to add the channel to.                                                  |
| `body`                                                                                        | [operations.CreateChannelRequestBody](../../models/operations/create-channel-request-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |