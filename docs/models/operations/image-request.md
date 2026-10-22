# ImageRequest

Image

## Example Usage

```typescript
import { ImageRequest } from "@moderation-api/sdk/models/operations";

let value: ImageRequest = {
  type: "image",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                      | *"image"*                                                                                                                                   | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `url`                                                                                                                                       | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | A public URL of the image content. Either url or data must be provided.                                                                     |
| `data`                                                                                                                                      | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Base64-encoded image data. Either url or data must be provided. Note: base64 images are not stored and will not appear in the review queue. |