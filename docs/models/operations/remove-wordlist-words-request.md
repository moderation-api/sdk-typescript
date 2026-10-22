# RemoveWordlistWordsRequest

## Example Usage

```typescript
import { RemoveWordlistWordsRequest } from "@moderation-api/sdk/models/operations";

let value: RemoveWordlistWordsRequest = {
  id: "<id>",
  words: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | ID of the wordlist to remove words from    |
| `words`                                    | *string*[]                                 | :heavy_check_mark:                         | Array of words to remove from the wordlist |