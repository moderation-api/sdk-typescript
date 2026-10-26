# CreateWordlistRequestBody

## Example Usage

```typescript
import { CreateWordlistRequestBody } from "@moderation-api/sdk/models/operations";

let value: CreateWordlistRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Name of the wordlist                                                                                                       |
| `key`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Key of the wordlist. Default: made from the name. If the key is already in use, a suffix is added.                         |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Description of the wordlist                                                                                                |
| `words`                                                                                                                    | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | Words to add to the wordlist. Words are converted to lowercase. Duplicate and empty words are ignored. Maximum 5000 words. |