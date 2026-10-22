# UpdateWordlistRequestBody

## Example Usage

```typescript
import { UpdateWordlistRequestBody } from "@moderation-api/sdk/models/operations";

let value: UpdateWordlistRequestBody = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | New name for the wordlist                                                                                    |
| `key`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | New key for the wordlist                                                                                     |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | New description for the wordlist                                                                             |
| `words`                                                                                                      | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | New words for the wordlist. Replace the existing words with these new ones. Duplicate words will be ignored. |
| `strict`                                                                                                     | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Deprecated. Now using threshold in project settings.                                                         |