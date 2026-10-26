# ActionResponse

The action to take based on the recommendation

## Example Usage

```typescript
import { ActionResponse } from "@moderation-api/sdk/models/operations";

let value: ActionResponse = "review";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"review" | "allow" | "reject" | Unrecognized<string>
```