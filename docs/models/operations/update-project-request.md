# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateProjectRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the project to update.                                                              |
| `body`                                                                                        | [operations.UpdateProjectRequestBody](../../models/operations/update-project-request-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |