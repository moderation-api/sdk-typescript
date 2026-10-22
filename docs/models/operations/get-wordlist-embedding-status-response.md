# GetWordlistEmbeddingStatusResponse

Embedding status details

## Example Usage

```typescript
import { GetWordlistEmbeddingStatusResponse } from "@moderation-api/sdk/models/operations";

let value: GetWordlistEmbeddingStatusResponse = {
  progress: 7641.74,
  totalWords: 5845.66,
  remainingWords: 6409.54,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `progress`                                          | *number*                                            | :heavy_check_mark:                                  | Percentage of words that have been embedded (0-100) |
| `totalWords`                                        | *number*                                            | :heavy_check_mark:                                  | Total number of words in the wordlist               |
| `remainingWords`                                    | *number*                                            | :heavy_check_mark:                                  | Number of words still waiting to be embedded        |