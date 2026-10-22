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

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The project to act on, when you call with an organization key. Optional when the organization has one project. A project key acts on its own project: naming another one is an error. |
| `body`                                                                                                                                                                                | [operations.SubmitContentRequestBody](../../models/operations/submit-content-request-body.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |