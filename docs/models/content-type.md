# ContentType

The kind of content the channel moderates.

## Example Usage

```typescript
import { ContentType } from "@moderation-api/sdk/models";

let value: ContentType = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"profile" | "message" | "post" | "comment" | "event" | "product" | "review" | "voice" | "other" | Unrecognized<string>
```