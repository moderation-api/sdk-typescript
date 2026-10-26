# Queue

## Example Usage

```typescript
import { Queue } from "@moderation-api/sdk/models";

let value: Queue = {
  id: "<id>",
  name: "<value>",
  description: "gracefully trench plumber canter",
  isDefault: true,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The queue ID.                                     |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | The queue name.                                   |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | The queue description.                            |
| `isDefault`                                       | *boolean*                                         | :heavy_check_mark:                                | Whether this is the default queue of the project. |