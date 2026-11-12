# DeleteWordlistResponse

Wordlist deleted successfully

## Example Usage

```typescript
import { DeleteWordlistResponse } from "@moderation-api/sdk/models/operations";

let value: DeleteWordlistResponse = {
  id: "<id>",
  deleted: false,
  detachedChannelIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID of the deleted wordlist                                            |
| `deleted`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | Whether the wordlist was deleted                                      |
| `detachedChannelIds`                                                  | *string*[]                                                            | :heavy_check_mark:                                                    | IDs of the channels that used the wordlist. It was removed from them. |