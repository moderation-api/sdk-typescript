# ObjectT

Object

## Example Usage

```typescript
import { ObjectT } from "@moderation-api/sdk/models/operations";

let value: ObjectT = {
  type: "object",
  data: {},
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"object"*                                        | :heavy_check_mark:                                | N/A                                               |
| `data`                                            | Record<string, *operations.ContentLeafRequest*>   | :heavy_check_mark:                                | Values in the object. Can be mixed content types. |