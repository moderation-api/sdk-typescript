# UnresolveQueueItemResponse

Successful response

## Example Usage

```typescript
import { UnresolveQueueItemResponse } from "@moderation-api/sdk/models/operations";

let value: UnresolveQueueItemResponse = {
  success: true,
  status: "<value>",
  unresolvedAt: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `success`                              | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `status`                               | *string*                               | :heavy_check_mark:                     | New status of the item                 |
| `unresolvedAt`                         | *string*                               | :heavy_check_mark:                     | Timestamp when the item was unresolved |