# SubmitContentRequest

## Example Usage

```typescript
import { SubmitContentRequest } from "@moderation-api/sdk/models/operations";

let value: SubmitContentRequest = {
  body: {
    content: {
      type: "video",
      url: "https://pessimistic-plain.com/",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The project to act on, by ID or name. Required with an organization key unless the key reaches only one project; list projects with GET /projects. A project key acts on its own project and needs no value: naming another one is an error. |
| `body`                                                                                                                                                                                                                                       | [operations.SubmitContentRequestBody](../../models/operations/submit-content-request-body.md)                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |