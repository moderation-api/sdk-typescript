# Comparator

Flag images that contain "at least" or "fewer than" the configured number of faces. Defaults to at_least.

## Example Usage

```typescript
import { Comparator } from "@moderation-api/sdk/models/operations";

let value: Comparator = "fewer_than";
```

## Values

```typescript
"at_least" | "fewer_than"
```