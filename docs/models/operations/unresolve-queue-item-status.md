# UnresolveQueueItemStatus

`pending` waits for review. `resolved` is reviewed.

## Example Usage

```typescript
import { UnresolveQueueItemStatus } from "@moderation-api/sdk/models/operations";

let value: UnresolveQueueItemStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "resolved" | Unrecognized<string>
```