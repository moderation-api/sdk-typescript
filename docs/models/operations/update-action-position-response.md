# UpdateActionPositionResponse

Show the action in all queues, selected queues or no queues (to use via API only).

## Example Usage

```typescript
import { UpdateActionPositionResponse } from "@moderation-api/sdk/models/operations";

let value: UpdateActionPositionResponse = "ALL_QUEUES";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ALL_QUEUES" | "SOME_QUEUES" | "HIDDEN" | Unrecognized<string>
```