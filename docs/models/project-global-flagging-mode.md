# ProjectGlobalFlaggingMode

`ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it, for testing a setup.

## Example Usage

```typescript
import { ProjectGlobalFlaggingMode } from "@moderation-api/sdk/models";

let value: ProjectGlobalFlaggingMode = "DRY_RUN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRY_RUN" | "ACTIVE" | Unrecognized<string>
```