# SuspendAuthorRequestBody

## Example Usage

```typescript
import { SuspendAuthorRequestBody } from "@moderation-api/sdk/models/operations";

let value: SuspendAuthorRequestBody = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `reason`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Why the action was taken. Saved with the action and sent in the webhook event. |
| `duration`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | How long the suspension lasts, in milliseconds. Defaults to 24 hours.          |