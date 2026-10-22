# DeleteActionResponse

Action deleted successfully

## Example Usage

```typescript
import { DeleteActionResponse } from "@moderation-api/sdk/models/operations";

let value: DeleteActionResponse = {
  deleted: true,
  id: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `deleted`                       | *boolean*                       | :heavy_check_mark:              | Whether the action was deleted. |
| `id`                            | *string*                        | :heavy_check_mark:              | The ID of the action.           |