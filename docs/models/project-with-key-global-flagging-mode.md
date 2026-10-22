# ProjectWithKeyGlobalFlaggingMode

`ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it, for testing a setup.

## Example Usage

```typescript
import { ProjectWithKeyGlobalFlaggingMode } from "@moderation-api/sdk/models";

let value: ProjectWithKeyGlobalFlaggingMode = "ACTIVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRY_RUN" | "ACTIVE" | Unrecognized<string>
```