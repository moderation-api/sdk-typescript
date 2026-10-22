# AudioResponse

Audio

## Example Usage

```typescript
import { AudioResponse } from "@moderation-api/sdk/models/operations";

let value: AudioResponse = {
  type: "audio",
  url: "https://helpful-unblinking.net",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"audio"*                    | :heavy_check_mark:           | N/A                          |
| `url`                        | *string*                     | :heavy_check_mark:           | The URL of the audio content |