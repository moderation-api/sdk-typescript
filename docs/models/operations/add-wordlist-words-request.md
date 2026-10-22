# AddWordlistWordsRequest

## Example Usage

```typescript
import { AddWordlistWordsRequest } from "@moderation-api/sdk/models/operations";

let value: AddWordlistWordsRequest = {
  id: "<id>",
  body: {
    words: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                  | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | ID of the wordlist to add words to                                                                                                                                                    |
| `projectId`                                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The project to act on, when you call with an organization key. Optional when the organization has one project. A project key acts on its own project: naming another one is an error. |
| `body`                                                                                                                                                                                | [operations.AddWordlistWordsRequestBody](../../models/operations/add-wordlist-words-request-body.md)                                                                                  | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |