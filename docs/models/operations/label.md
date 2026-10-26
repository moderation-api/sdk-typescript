# Label

## Example Usage

```typescript
import { Label } from "@moderation-api/sdk/models/operations";

let value: Label = {
  id: "<id>",
  probability: 1430.61,
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