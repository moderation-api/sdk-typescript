# DuplicateChannelRequestBody

## Example Usage

```typescript
import { DuplicateChannelRequestBody } from "@moderation-api/sdk/models/operations";

let value: DuplicateChannelRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Name of the copy. Defaults to the original name with "(copy)".                                 |
| `key`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | Key of the copy. Defaults to the original key with a timestamp. Must be unique in the project. |