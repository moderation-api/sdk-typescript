# UnblockAuthorRequestBody

## Example Usage

```typescript
import { UnblockAuthorRequestBody } from "@moderation-api/sdk/models/operations";

let value: UnblockAuthorRequestBody = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `reason`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Why the action was taken. Saved with the action and sent in the webhook event. |