# RateLimitErrorCode

Exactly what went wrong. Stable; safe to branch on. New codes may be added.

- `rate_limit_exceeded`: Too many requests. Wait for the `Retry-After` seconds.

## Example Usage

```typescript
import { RateLimitErrorCode } from "@moderation-api/sdk/models";

let value: RateLimitErrorCode = "rate_limit_exceeded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"rate_limit_exceeded" | Unrecognized<string>
```