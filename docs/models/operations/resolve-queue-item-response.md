# ResolveQueueItemResponse

Successful response

## Example Usage

```typescript
import { ResolveQueueItemResponse } from "@moderation-api/sdk/models/operations";

let value: ResolveQueueItemResponse = {
  success: false,
  resolvedAt: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `success`                              | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `resolvedAt`                           | *string*                               | :heavy_check_mark:                     | When the item was resolved (ISO 8601). |