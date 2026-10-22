# LowQualityContent

## Example Usage

```typescript
import { LowQualityContent } from "@moderation-api/sdk/models/operations";

let value: LowQualityContent = {
  flag: false,
  id: "low_quality",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `flag`                                                                                                 | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `threshold`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *"low_quality"*                                                                                        | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `minWords`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Flag content with fewer than this many words as low-effort. Defaults to 3. Set to disable by omitting. |