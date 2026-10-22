# Scores

Positive and negative scored independently: mixed content scores high on both. Present whenever `value` is set.

## Example Usage

```typescript
import { Scores } from "@moderation-api/sdk/models/operations";

let value: Scores = {
  positive: 1127.69,
  negative: 2984.65,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `positive`                           | *number*                             | :heavy_check_mark:                   | How positive the content is, 0 to 1. |
| `negative`                           | *number*                             | :heavy_check_mark:                   | How negative the content is, 0 to 1. |