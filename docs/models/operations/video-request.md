# VideoRequest

Video

## Example Usage

```typescript
import { VideoRequest } from "@moderation-api/sdk/models/operations";

let value: VideoRequest = {
  type: "video",
  url: "https://winged-agreement.org/",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `type`                            | *"video"*                         | :heavy_check_mark:                | N/A                               |
| `url`                             | *string*                          | :heavy_check_mark:                | A public URL of the video content |