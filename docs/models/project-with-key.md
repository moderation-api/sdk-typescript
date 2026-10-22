# ProjectWithKey

## Example Usage

```typescript
import { ProjectWithKey } from "@moderation-api/sdk/models";

let value: ProjectWithKey = {
  id: "<id>",
  name: "<value>",
  description:
    "misread flickering utterly cram status demobilise dusk outlandish than cruel",
  domain: "everlasting-dish.biz",
  context: "<value>",
  globalFlaggingMode: "ACTIVE",
  enableRequestLogging: false,
  casebookEnabled: false,
  createdAt: "1724137383535",
  updatedAt: "1735632829242",
  secretKey: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the project.                                                                                                        |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The project's name.                                                                                                           |
| `description`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The project's description.                                                                                                    |
| `domain`                                                                                                                      | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The website or app the project moderates content for.                                                                         |
| `context`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | What the platform is and who uses it. AI moderation reads it to judge content in context.                                     |
| `globalFlaggingMode`                                                                                                          | [models.ProjectWithKeyGlobalFlaggingMode](../models/project-with-key-global-flagging-mode.md)                                 | :heavy_check_mark:                                                                                                            | `ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it, for testing a setup.                                 |
| `enableRequestLogging`                                                                                                        | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether moderated content is stored and shown in the dashboard.                                                               |
| `casebookEnabled`                                                                                                             | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether decisions made in the review queue are recorded in the project's casebook.                                            |
| `createdAt`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | When the project was created.                                                                                                 |
| `updatedAt`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | When the project was last changed.                                                                                            |
| `secretKey`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | A secret API key for the new project. Use it to moderate content in this project. It is also shown in the project's settings. |