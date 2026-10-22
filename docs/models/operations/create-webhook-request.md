# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@moderation-api/sdk/models/operations";

let value: CreateWebhookRequest = {
  body: {
    name: "<value>",
    url: "https://passionate-season.net",
    eventTypes: [],
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The project to act on, when you call with an organization key. Optional when the organization has one project. A project key acts on its own project: naming another one is an error. |
| `body`                                                                                                                                                                                | [operations.CreateWebhookRequestBody](../../models/operations/create-webhook-request-body.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |