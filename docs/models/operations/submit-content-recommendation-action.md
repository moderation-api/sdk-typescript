# SubmitContentRecommendationAction

The action to take based on the recommendation

## Example Usage

```typescript
import { SubmitContentRecommendationAction } from "@moderation-api/sdk/models/operations";

let value: SubmitContentRecommendationAction = "reject";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"review" | "allow" | "reject" | Unrecognized<string>
```