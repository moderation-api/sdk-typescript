# AuthenticationErrorCode

Exactly what went wrong. Stable; safe to branch on. New codes may be added.

- `unauthorized`: Authentication failed.
- `missing_api_key`: No API key in the `Authorization` header.
- `malformed_api_key`: The `Authorization` header does not contain a valid key format.
- `invalid_api_key`: The API key does not exist or was revoked.

## Example Usage

```typescript
import { AuthenticationErrorCode } from "@moderation-api/sdk/models";

let value: AuthenticationErrorCode = "unauthorized";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unauthorized" | "missing_api_key" | "malformed_api_key" | "invalid_api_key" | Unrecognized<string>
```