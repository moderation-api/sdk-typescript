# GetQueueResponse

Successful response

## Example Usage

```typescript
import { GetQueueResponse } from "@moderation-api/sdk/models/operations";

let value: GetQueueResponse = {
  queue: {
    id: "<id>",
    name: "<value>",
    description: "until pointed schematise",
    filter: {},
    unresolvedItemsCount: 8405.32,
    resolvedItemsCount: 2502.72,
    totalItemsCount: 206.32,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `queue`                                              | [operations.Queue](../../models/operations/queue.md) | :heavy_check_mark:                                   | N/A                                                  |