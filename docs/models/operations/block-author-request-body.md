# BlockAuthorRequestBody

## Example Usage

```typescript
import { BlockAuthorRequestBody } from "@moderation-api/sdk/models/operations";

let value: BlockAuthorRequestBody = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `reason`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Why the action was taken. Saved with the action and sent in the webhook event. |