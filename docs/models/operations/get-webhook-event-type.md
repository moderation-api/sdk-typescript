# GetWebhookEventType

## Example Usage

```typescript
import { GetWebhookEventType } from "@moderation-api/sdk/models/operations";

let value: GetWebhookEventType = "AUTHOR_ACTION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUE_ITEM_NEW" | "QUEUE_ITEM_COMPLETED" | "QUEUE_ITEM_ACTION" | "QUEUE_ITEM_REJECTED" | "QUEUE_ITEM_ALLOWED" | "AUTHOR_BLOCKED" | "AUTHOR_UNBLOCKED" | "AUTHOR_SUSPENDED" | "AUTHOR_UPDATED" | "AUTHOR_TRUST_LEVEL_CHANGED" | "AUTHOR_ACTION" | Unrecognized<string>
```