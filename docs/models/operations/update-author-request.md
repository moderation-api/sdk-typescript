# UpdateAuthorRequest

## Example Usage

```typescript
import { UpdateAuthorRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateAuthorRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Either external ID or the ID assigned by moderation API.                                    |
| `body`                                                                                      | [operations.UpdateAuthorRequestBody](../../models/operations/update-author-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |