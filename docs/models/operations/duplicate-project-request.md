# DuplicateProjectRequest

## Example Usage

```typescript
import { DuplicateProjectRequest } from "@moderation-api/sdk/models/operations";

let value: DuplicateProjectRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the project to copy.                                                                      |
| `body`                                                                                              | [operations.DuplicateProjectRequestBody](../../models/operations/duplicate-project-request-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |