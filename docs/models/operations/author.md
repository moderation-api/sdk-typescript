# Author

## Example Usage

```typescript
import { Author } from "@moderation-api/sdk/models/operations";

let value: Author = {
  id: "<id>",
  block: {},
  status: "blocked",
  trustLevel: {
    level: 6111.07,
    manual: true,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Author ID in Moderation API                                                |
| `externalId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | The author's ID from your system                                           |
| `block`                                                                    | [operations.Block](../../models/operations/block.md)                       | :heavy_check_mark:                                                         | Block or suspension details, if applicable. Null if the author is enabled. |
| `status`                                                                   | [operations.AuthorStatus](../../models/operations/author-status.md)        | :heavy_check_mark:                                                         | Current author status                                                      |
| `trustLevel`                                                               | [operations.TrustLevel](../../models/operations/trust-level.md)            | :heavy_check_mark:                                                         | N/A                                                                        |