# ClassifierOutput

Classifier policy.

## Example Usage

```typescript
import { ClassifierOutput } from "@moderation-api/sdk/models/operations";

let value: ClassifierOutput = {
  id: "<id>",
  type: "classifier",
  probability: 8955.39,
  flagged: false,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The unique identifier for the classifier output.                                                                      |
| `type`                                                                                                                | *"classifier"*                                                                                                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `probability`                                                                                                         | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `flagged`                                                                                                             | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `flaggedFields`                                                                                                       | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | The keys of the flagged fields if submitting an object.                                                               |
| `labels`                                                                                                              | [operations.SubmitContentLabel](../../models/operations/submit-content-label.md)[]                                    | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `data`                                                                                                                | Record<string, *any*>                                                                                                 | :heavy_minus_sign:                                                                                                    | Optional structured data produced by the policy. For face detection: { count, faces: [{ confidence, gender, age }] }. |