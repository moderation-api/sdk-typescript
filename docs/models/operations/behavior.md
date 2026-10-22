# Behavior

How your recommendation combines with ours. Defaults to 'escalate', which only applies it when stricter than ours; 'override' replaces ours outright.

## Example Usage

```typescript
import { Behavior } from "@moderation-api/sdk/models/operations";

let value: Behavior = "override";
```

## Values

```typescript
"override" | "escalate"
```