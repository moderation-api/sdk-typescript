# UpdateActionRequest

## Example Usage

```typescript
import { UpdateActionRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateActionRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | The ID of the action to update.                                                             |
| `body`                                                                                      | [operations.UpdateActionRequestBody](../../models/operations/update-action-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |