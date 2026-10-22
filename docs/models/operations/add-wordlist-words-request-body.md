# AddWordlistWordsRequestBody

## Example Usage

```typescript
import { AddWordlistWordsRequestBody } from "@moderation-api/sdk/models/operations";

let value: AddWordlistWordsRequestBody = {
  words: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `words`                                                                 | *string*[]                                                              | :heavy_check_mark:                                                      | Array of words to add to the wordlist. Duplicate words will be ignored. |