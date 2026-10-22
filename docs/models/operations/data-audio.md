# DataAudio

Audio

## Example Usage

```typescript
import { DataAudio } from "@moderation-api/sdk/models/operations";

let value: DataAudio = {
  type: "audio",
  url: "https://ill-beret.biz/",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"audio"*                    | :heavy_check_mark:           | N/A                          |
| `url`                        | *string*                     | :heavy_check_mark:           | The URL of the audio content |