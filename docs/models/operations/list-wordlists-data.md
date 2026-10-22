# ListWordlistsData

## Example Usage

```typescript
import { ListWordlistsData } from "@moderation-api/sdk/models/operations";

let value: ListWordlistsData = {
  id: "<id>",
  name: "<value>",
  description:
    "kit lest why solemnly elementary reasoning fold spiteful anxiously because",
  createdAt: "1718124660516",
  userId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Unique identifier of the wordlist |
| `name`                            | *string*                          | :heavy_check_mark:                | Name of the wordlist              |
| `description`                     | *string*                          | :heavy_check_mark:                | Description of the wordlist       |
| `createdAt`                       | *string*                          | :heavy_check_mark:                | When the wordlist was created     |
| `userId`                          | *string*                          | :heavy_check_mark:                | User who created the wordlist     |