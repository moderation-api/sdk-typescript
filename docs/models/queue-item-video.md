# QueueItemVideo

Video

## Example Usage

```typescript
import { QueueItemVideo } from "@moderation-api/sdk/models";

let value: QueueItemVideo = {
  type: "video",
  url: "https://grumpy-morning.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `type`                            | *"video"*                         | :heavy_check_mark:                | N/A                               |
| `url`                             | *string*                          | :heavy_check_mark:                | A public URL of the video content |