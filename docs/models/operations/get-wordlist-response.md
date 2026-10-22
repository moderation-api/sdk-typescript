# GetWordlistResponse

Successful response

## Example Usage

```typescript
import { GetWordlistResponse } from "@moderation-api/sdk/models/operations";

let value: GetWordlistResponse = {
  id: "<id>",
  name: "<value>",
  words: [
    "<value 1>",
  ],
  createdAt: "1711391484125",
  organizationId: "<id>",
  userId: "<id>",
  strict: true,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_check_mark:            | ID of the wordlist            |
| `name`                        | *string*                      | :heavy_check_mark:            | N/A                           |
| `words`                       | *string*[]                    | :heavy_check_mark:            | Words in the wordlist         |
| `createdAt`                   | *string*                      | :heavy_check_mark:            | Creation date of the wordlist |
| `organizationId`              | *string*                      | :heavy_check_mark:            | ID of the organization        |
| `userId`                      | *string*                      | :heavy_check_mark:            | N/A                           |
| `strict`                      | *boolean*                     | :heavy_check_mark:            | Strict mode                   |