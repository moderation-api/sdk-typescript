# PersonalStoryInsight

Personal story insight. Includes a personal experience or story as a source of support for the statements made in the comment.

## Example Usage

```typescript
import { PersonalStoryInsight } from "@moderation-api/sdk/models/operations";

let value: PersonalStoryInsight = {
  id: "personal_story",
  type: "insight",
  probability: 3734.41,
  value: true,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *"personal_story"*                        | :heavy_check_mark:                        | N/A                                       |
| `type`                                    | *"insight"*                               | :heavy_check_mark:                        | N/A                                       |
| `probability`                             | *number*                                  | :heavy_check_mark:                        | N/A                                       |
| `value`                                   | *boolean*                                 | :heavy_check_mark:                        | Whether the content shows personal story. |