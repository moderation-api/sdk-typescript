# TranscriptionQuality

Trade-off between transcription speed and accuracy.

## Example Usage

```typescript
import { TranscriptionQuality } from "@moderation-api/sdk/models";

let value: TranscriptionQuality = "BALANCED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SPEED" | "BALANCED" | "ACCURACY" | Unrecognized<string>
```