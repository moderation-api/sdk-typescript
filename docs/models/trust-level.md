# TrustLevel

## Example Usage

```typescript
import { TrustLevel } from "@moderation-api/sdk/models";

let value: TrustLevel = {
  level: 569.93,
  manual: true,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `level`                                                 | *number*                                                | :heavy_check_mark:                                      | Author trust level (-1, 0, 1, 2, 3, or 4)               |
| `manual`                                                | *boolean*                                               | :heavy_check_mark:                                      | True if the trust level was set manually by a moderator |