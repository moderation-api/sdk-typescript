# SubmitContentLabel

## Example Usage

```typescript
import { SubmitContentLabel } from "@moderation-api/sdk/models/operations";

let value: SubmitContentLabel = {
  id: "<id>",
  probability: 2723.57,
  flagged: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `probability`      | *number*           | :heavy_check_mark: | N/A                |
| `flagged`          | *boolean*          | :heavy_check_mark: | N/A                |
| `shadowFlagged`    | *boolean*          | :heavy_minus_sign: | N/A                |