# FlaggingMode

`ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it.

## Example Usage

```typescript
import { FlaggingMode } from "@moderation-api/sdk/models";

let value: FlaggingMode = "DRY_RUN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRY_RUN" | "ACTIVE" | Unrecognized<string>
```