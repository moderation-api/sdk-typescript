# FlaggedContentTrend

## Example Usage

```typescript
import { FlaggedContentTrend } from "@moderation-api/sdk/models/operations";

let value: FlaggedContentTrend = {
  label: "<value>",
  trend: 3612.71,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Content flag/label                                                                            |
| `trend`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Trend indicator (-1 to 1) showing if this type of flagged content is increasing or decreasing |