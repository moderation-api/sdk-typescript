# ErrorIssue

## Example Usage

```typescript
import { ErrorIssue } from "@moderation-api/sdk/models";

let value: ErrorIssue = {
  message: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | What is wrong.                                     |
| `path`                                             | *models.Path*[]                                    | :heavy_minus_sign:                                 | Location of the invalid field in the request body. |
| `code`                                             | *string*                                           | :heavy_minus_sign:                                 | Validation rule that failed.                       |