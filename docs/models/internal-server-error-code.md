# InternalServerErrorCode

Exactly what went wrong. Stable; safe to branch on. New codes may be added.

- `internal_error`: Something went wrong on our side. Retry with backoff.

## Example Usage

```typescript
import { InternalServerErrorCode } from "@moderation-api/sdk/models";

let value: InternalServerErrorCode = "internal_error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"internal_error" | Unrecognized<string>
```