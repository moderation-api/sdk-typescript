# Metrics

## Example Usage

```typescript
import { Metrics } from "@moderation-api/sdk/models";

let value: Metrics = {
  totalContent: 5975.43,
  flaggedContent: 7403.64,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `totalContent`                                                                            | *number*                                                                                  | :heavy_check_mark:                                                                        | Total pieces of content                                                                   |
| `flaggedContent`                                                                          | *number*                                                                                  | :heavy_check_mark:                                                                        | Number of flagged content pieces                                                          |
| `averageSentiment`                                                                        | *number*                                                                                  | :heavy_minus_sign:                                                                        | Average sentiment score of content (-1 to 1). Requires a sentiment model in your project. |