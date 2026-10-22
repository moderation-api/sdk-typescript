# DeleteProjectResponse

Project deleted successfully

## Example Usage

```typescript
import { DeleteProjectResponse } from "@moderation-api/sdk/models/operations";

let value: DeleteProjectResponse = {
  deleted: true,
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `deleted`                        | *boolean*                        | :heavy_check_mark:               | Whether the project was deleted. |
| `id`                             | *string*                         | :heavy_check_mark:               | The ID of the project.           |