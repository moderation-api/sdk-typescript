# GetActionRequest

## Example Usage

```typescript
import { GetActionRequest } from "@moderation-api/sdk/models/operations";

let value: GetActionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                  | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | The ID of the action to get.                                                                                                                                                          |
| `projectId`                                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The project to act on, when you call with an organization key. Optional when the organization has one project. A project key acts on its own project: naming another one is an error. |