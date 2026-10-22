# CreateProjectRequest

## Example Usage

```typescript
import { CreateProjectRequest } from "@moderation-api/sdk/models/operations";

let value: CreateProjectRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | The project's name.                                                                                 |
| `domain`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The website or app the project moderates content for. Used to write the context when none is given. |
| `context`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | What the platform is and who uses it.                                                               |
| `brief`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | What you moderate, the problems you see and your guidelines.                                        |
| `usedByMinors`                                                                                      | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether children use the platform.                                                                  |