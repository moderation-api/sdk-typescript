# CreateWordlistResponse

Wordlist created successfully

## Example Usage

```typescript
import { CreateWordlistResponse } from "@moderation-api/sdk/models/operations";

let value: CreateWordlistResponse = {
  id: "<id>",
  name: "<value>",
  words: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  createdAt: "1713571541251",
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