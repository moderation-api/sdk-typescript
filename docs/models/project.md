# Project

## Example Usage

```typescript
import { Project } from "@moderation-api/sdk/models";

let value: Project = {
  id: "<id>",
  name: "<value>",
  description: "cooperative sinful deploy how tentacle leading",
  domain: null,
  context: "<value>",
  globalFlaggingMode: "ACTIVE",
  enableRequestLogging: true,
  casebookEnabled: false,
  createdAt: "1727920118848",
  updatedAt: "1735659161226",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the project.                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The project's name.                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project's description.                                                                    |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The website or app the project moderates content for.                                         |
| `context`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | What the platform is and who uses it. AI moderation reads it to judge content in context.     |
| `globalFlaggingMode`                                                                          | [models.ProjectGlobalFlaggingMode](../models/project-global-flagging-mode.md)                 | :heavy_check_mark:                                                                            | `ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it, for testing a setup. |
| `enableRequestLogging`                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether moderated content is stored and shown in the dashboard.                               |
| `casebookEnabled`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether decisions made in the review queue are recorded in the project's casebook.            |
| `createdAt`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | When the project was created.                                                                 |
| `updatedAt`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | When the project was last changed.                                                            |