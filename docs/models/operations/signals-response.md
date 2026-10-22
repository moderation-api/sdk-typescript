# SignalsResponse

Observable properties of a URL (URL Risk only). Absent for allow/block list matches.

## Example Usage

```typescript
import { SignalsResponse } from "@moderation-api/sdk/models/operations";

let value: SignalsResponse = {
  brandImpersonation: null,
  hasSuspiciousCharacters: false,
  isLinkShortener: true,
  domainAgeDays: 594065,
  hasEmailSetup: false,
  redirectCount: 774288,
  finalUrl: null,
  botProtection: false,
  isReported: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `brandImpersonation`                                                            | [operations.BrandImpersonation](../../models/operations/brand-impersonation.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `hasSuspiciousCharacters`                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `isLinkShortener`                                                               | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `domainAgeDays`                                                                 | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `hasEmailSetup`                                                                 | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `redirectCount`                                                                 | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `finalUrl`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `botProtection`                                                                 | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `isReported`                                                                    | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |