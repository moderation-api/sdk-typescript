# FaceDetection

## Example Usage

```typescript
import { FaceDetection } from "@moderation-api/sdk/models/operations";

let value: FaceDetection = {
  flag: true,
  id: "face_detection",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `flag`                                                                                                           | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `threshold`                                                                                                      | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *"face_detection"*                                                                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `comparator`                                                                                                     | [operations.Comparator](../../models/operations/comparator.md)                                                   | :heavy_minus_sign:                                                                                               | Flag images that contain "at least" or "fewer than" the configured number of faces. Defaults to at_least.        |
| `count`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of faces the comparator applies to. Defaults to 1, so the default rule flags any image containing a face. |