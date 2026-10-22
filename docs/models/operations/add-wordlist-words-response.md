# AddWordlistWordsResponse

Words successfully added to wordlist

## Example Usage

```typescript
import { AddWordlistWordsResponse } from "@moderation-api/sdk/models/operations";

let value: AddWordlistWordsResponse = {
  addedCount: 6586.52,
  totalCount: 9020.38,
  addedWords: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `addedCount`                      | *number*                          | :heavy_check_mark:                | Number of words added             |
| `totalCount`                      | *number*                          | :heavy_check_mark:                | Total number of words in wordlist |
| `addedWords`                      | *string*[]                        | :heavy_check_mark:                | List of words that were added     |