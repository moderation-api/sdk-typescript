# QueueItemSignals

## Example Usage

```typescript
import { QueueItemSignals } from "@moderation-api/sdk/models";

let value: QueueItemSignals = {
  brandImpersonation: {
    brand: "<value>",
    method: "<value>",
  },
  hasSuspiciousCharacters: true,
  isLinkShortener: true,
  domainAgeDays: 7954.89,
  hasEmailSetup: false,
  redirectCount: 6044.44,
  finalUrl: "https://infatuated-mobility.com/",
  botProtection: true,
  isReported: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `brandImpersonation`                                                              | [models.QueueItemBrandImpersonation](../models/queue-item-brand-impersonation.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `hasSuspiciousCharacters`                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `isLinkShortener`                                                                 | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `domainAgeDays`                                                                   | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `hasEmailSetup`                                                                   | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `redirectCount`                                                                   | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `finalUrl`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `botProtection`                                                                   | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `isReported`                                                                      | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |