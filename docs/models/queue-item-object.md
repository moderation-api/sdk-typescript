# QueueItemObject

Object

## Example Usage

```typescript
import { QueueItemObject } from "@moderation-api/sdk/models";

let value: QueueItemObject = {
  type: "object",
  data: {
    "key": {
      type: "video",
      url: "https://oily-marathon.biz",
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"object"*                                        | :heavy_check_mark:                                | N/A                                               |
| `data`                                            | Record<string, *models.QueueItemContentLeaf*>     | :heavy_check_mark:                                | Values in the object. Can be mixed content types. |