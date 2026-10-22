# ClientAction

A recommendation from your own client-side flagging (e.g. a banned-IP list or a third-party tool). Feeds the rules engine and can escalate or override the recommended action. Does not change whether our analysis flagged the content.

## Example Usage

```typescript
import { ClientAction } from "@moderation-api/sdk/models/operations";

let value: ClientAction = {
  action: "review",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                              | [operations.ActionRequest](../../models/operations/action-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                    | Your recommendation for the content: allow, review, or reject.                                                                                        |
| `behavior`                                                                                                                                            | [operations.Behavior](../../models/operations/behavior.md)                                                                                            | :heavy_minus_sign:                                                                                                                                    | How your recommendation combines with ours. Defaults to 'escalate', which only applies it when stricter than ours; 'override' replaces ours outright. |
| `source`                                                                                                                                              | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Where your recommendation came from, e.g. "banned-ip".                                                                                                |
| `reason`                                                                                                                                              | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | A human-readable explanation for your recommendation.                                                                                                 |