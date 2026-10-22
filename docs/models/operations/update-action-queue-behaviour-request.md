# UpdateActionQueueBehaviourRequest

Whether the action resolves and removes the item, unresolves and re-add it to the queue, or does not change the resolve status.

## Example Usage

```typescript
import { UpdateActionQueueBehaviourRequest } from "@moderation-api/sdk/models/operations";

let value: UpdateActionQueueBehaviourRequest = "ADD";
```

## Values

```typescript
"REMOVE" | "ADD" | "NO_CHANGE"
```