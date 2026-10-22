# AudioRequest

Audio

## Example Usage

```typescript
import { AudioRequest } from "@moderation-api/sdk/models/operations";

let value: AudioRequest = {
  type: "audio",
  url: "https://exhausted-cassava.com",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"audio"*                    | :heavy_check_mark:           | N/A                          |
| `url`                        | *string*                     | :heavy_check_mark:           | The URL of the audio content |