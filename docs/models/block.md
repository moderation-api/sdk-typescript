# Block

## Example Usage

```typescript
import { Block } from "@moderation-api/sdk/models";

let value: Block = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `until`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The timestamp until which they are blocked if the author is suspended. |
| `reason`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The moderators reason why the author was blocked or suspended.         |