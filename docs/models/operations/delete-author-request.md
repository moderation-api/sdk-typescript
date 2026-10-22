# DeleteAuthorRequest

## Example Usage

```typescript
import { DeleteAuthorRequest } from "@moderation-api/sdk/models/operations";

let value: DeleteAuthorRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Either external ID or the ID assigned by moderation API. |