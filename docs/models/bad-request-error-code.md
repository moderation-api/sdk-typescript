# BadRequestErrorCode

Exactly what went wrong. Stable; safe to branch on. New codes may be added.

- `invalid_request`: A parameter is invalid. `message` says which one.
- `project_id_required`: An organization key called a project endpoint without naming the project in `Project-Id`, and the organization has more than one project.
- `validation_failed`: The request body does not match the schema. `issues` lists each problem with its `path`.

## Example Usage

```typescript
import { BadRequestErrorCode } from "@moderation-api/sdk/models";

let value: BadRequestErrorCode = "invalid_request";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalid_request" | "project_id_required" | "validation_failed" | Unrecognized<string>
```