# CreateFeedbackRequestBody

## Example Usage

```typescript
import { CreateFeedbackRequestBody } from "@moderation-api/sdk/models/operations";

let value: CreateFeedbackRequestBody = {
  title: "<value>",
  description:
    "self-reliant viciously before ick athwart categorise liberalize",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A short summary of the request.                                                                                |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | What you tried to do, why, and what is missing or does not work. Plain text. Blank lines start new paragraphs. |
| `type`                                                                                                         | [operations.CreateFeedbackType](../../models/operations/create-feedback-type.md)                               | :heavy_minus_sign:                                                                                             | The kind of feedback.                                                                                          |
| `source`                                                                                                       | [operations.Source](../../models/operations/source.md)                                                         | :heavy_minus_sign:                                                                                             | Where the feedback was written: MCP server, agent skill, CLI or API.                                           |