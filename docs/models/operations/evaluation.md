# Evaluation

The evaluation of the content after running the channel policies.

## Example Usage

```typescript
import { Evaluation } from "@moderation-api/sdk/models/operations";

let value: Evaluation = {
  flagged: false,
  flagProbability: 6801.35,
  severityScore: 222.93,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `flagged`                                                                           | *boolean*                                                                           | :heavy_check_mark:                                                                  | Whether the content was flagged by any policy.                                      |
| `flagProbability`                                                                   | *number*                                                                            | :heavy_check_mark:                                                                  | The probability that the content should be flagged.                                 |
| `severityScore`                                                                     | *number*                                                                            | :heavy_check_mark:                                                                  | The severity score of the content. A higher score indicates more severe content.    |
| `unicodeSpoofed`                                                                    | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the content was flagged for Unicode spoofing.                               |
| `shadowFlagged`                                                                     | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the content would have been flagged by analyze-only policies (flag: false). |