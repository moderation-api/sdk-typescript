# Value

## Example Usage

```typescript
import { Value } from "@moderation-api/sdk/models/operations";

let value: Value = "neutral";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"positive" | "neutral" | "negative" | Unrecognized<string>
```