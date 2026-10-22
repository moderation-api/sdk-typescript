# GetWebhookSecretResponse

Signing secret retrieved successfully

## Example Usage

```typescript
import { GetWebhookSecretResponse } from "@moderation-api/sdk/models/operations";

let value: GetWebhookSecretResponse = {
  secret: "<value>",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `secret`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The signing secret for this project. Every webhook delivery is signed with HMAC-SHA256 over the raw JSON body, hex-encoded in the `modapi-signature` header. |