# ListWebhooksPayloadVersion

Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat shape and is read-only via this API.

## Example Usage

```typescript
import { ListWebhooksPayloadVersion } from "@moderation-api/sdk/models/operations";

let value: ListWebhooksPayloadVersion = "V2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"V1" | "V2" | Unrecognized<string>
```