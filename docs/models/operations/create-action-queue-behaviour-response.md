# CreateActionQueueBehaviourResponse

Whether the action resolves and removes the item, unresolves and re-add it to the queue, or does not change the resolve status.

## Example Usage

```typescript
import { CreateActionQueueBehaviourResponse } from "@moderation-api/sdk/models/operations";

let value: CreateActionQueueBehaviourResponse = "ADD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REMOVE" | "ADD" | "NO_CHANGE" | Unrecognized<string>
```