# CreateChannelRequestBody

## Example Usage

```typescript
import { CreateChannelRequestBody } from "@moderation-api/sdk/models/operations";

let value: CreateChannelRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The channel's name.                                                                                                                    |
| `key`                                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The key you pass as `channel` when you moderate content. Defaults to the name in lowercase with dashes. Must be unique in the project. |
| `description`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The channel's description.                                                                                                             |
| `contentType`                                                                                                                          | [operations.CreateChannelContentType](../../models/operations/create-channel-content-type.md)                                          | :heavy_minus_sign:                                                                                                                     | The kind of content the channel moderates.                                                                                             |