# UpdateWordlistRequest

## Example Usage

```typescript
import { UpdateWordlistRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateWordlistRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | ID of the wordlist to update                                                                    |
| `body`                                                                                          | [operations.UpdateWordlistRequestBody](../../models/operations/update-wordlist-request-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |