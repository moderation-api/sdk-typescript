# Guideline

## Example Usage

```typescript
import { Guideline } from "@moderation-api/sdk/models/operations";

let value: Guideline = {
  flag: true,
  id: "guideline",
  instructions: "<value>",
  guidelineKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `flag`             | *boolean*          | :heavy_check_mark: | N/A                |
| `threshold`        | *number*           | :heavy_minus_sign: | N/A                |
| `id`               | *"guideline"*      | :heavy_check_mark: | N/A                |
| `instructions`     | *string*           | :heavy_check_mark: | N/A                |
| `guidelineKey`     | *string*           | :heavy_check_mark: | N/A                |