# CreateAuthorMetadata

Additional metadata provided by your system. We recommend including any relevant information that may assist in the moderation process.

## Example Usage

```typescript
import { CreateAuthorMetadata } from "@moderation-api/sdk/models/operations";

let value: CreateAuthorMetadata = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `emailVerified`                               | *boolean*                                     | :heavy_minus_sign:                            | Whether the author's email is verified        |
| `phoneVerified`                               | *boolean*                                     | :heavy_minus_sign:                            | Whether the author's phone number is verified |
| `identityVerified`                            | *boolean*                                     | :heavy_minus_sign:                            | Whether the author's identity is verified     |
| `isPayingCustomer`                            | *boolean*                                     | :heavy_minus_sign:                            | Whether the author is a paying customer       |
| `additionalProperties`                        | Record<string, *any*>                         | :heavy_minus_sign:                            | N/A                                           |