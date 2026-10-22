# TextResponse

Text

## Example Usage

```typescript
import { TextResponse } from "@moderation-api/sdk/models/operations";

let value: TextResponse = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"text"*           | :heavy_check_mark: | N/A                |
| `text`             | *string*           | :heavy_check_mark: | The content text   |