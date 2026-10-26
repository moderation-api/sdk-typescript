# QueueItemStatus

`pending` waits for review. `resolved` is reviewed.

## Example Usage

```typescript
import { QueueItemStatus } from "@moderation-api/sdk/models";

let value: QueueItemStatus = "resolved";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "resolved" | Unrecognized<string>
```