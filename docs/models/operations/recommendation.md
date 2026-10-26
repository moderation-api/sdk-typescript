# Recommendation

The recommendation for the content based on the evaluation.

## Example Usage

```typescript
import { Recommendation } from "@moderation-api/sdk/models/operations";

let value: Recommendation = {
  action: "allow",
  reasonCodes: [],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                 | [operations.ActionResponse](../../models/operations/action-response.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                       | The action to take based on the recommendation                                                                                                                           |
| `reasonCodes`                                                                                                                                                            | *operations.ReasonCode*[]                                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | Reason codes for the recommendation. Standard codes plus a `rule:<key>` code identifying the rule that produced the action. Can be used to display a reason to the user. |
| `matchedRules`                                                                                                                                                           | [operations.MatchedRule](../../models/operations/matched-rule.md)[]                                                                                                      | :heavy_minus_sign:                                                                                                                                                       | Rules that matched during evaluation, if rules engine is active.                                                                                                         |