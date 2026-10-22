# ConflictErrorCode

Exactly what went wrong. Stable; safe to branch on. New codes may be added.

- `resource_conflict`: The request conflicts with an existing resource.

## Example Usage

```typescript
import { ConflictErrorCode } from "@moderation-api/sdk/models";

let value: ConflictErrorCode = "resource_conflict";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"resource_conflict" | Unrecognized<string>
```