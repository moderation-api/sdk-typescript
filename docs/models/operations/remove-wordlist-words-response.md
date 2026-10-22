# RemoveWordlistWordsResponse

Words successfully removed from wordlist

## Example Usage

```typescript
import { RemoveWordlistWordsResponse } from "@moderation-api/sdk/models/operations";

let value: RemoveWordlistWordsResponse = {
  removedCount: 6858.8,
  totalCount: 5343.82,
  removedWords: [
    "<value 1>",
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `removedCount`                    | *number*                          | :heavy_check_mark:                | Number of words removed           |
| `totalCount`                      | *number*                          | :heavy_check_mark:                | Total number of words in wordlist |
| `removedWords`                    | *string*[]                        | :heavy_check_mark:                | List of words removed             |