# BrandImpersonation

## Example Usage

```typescript
import { BrandImpersonation } from "@moderation-api/sdk/models/operations";

let value: BrandImpersonation = {
  brand: "<value>",
  method: "registered_domain_token",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `brand`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `method`                                               | [operations.Method](../../models/operations/method.md) | :heavy_check_mark:                                     | N/A                                                    |