<!-- Start SDK Example Usage [usage] -->
```typescript
import { ModerationApi } from "@moderation-api/sdk";

const moderationApi = new ModerationApi({
  secretKey: process.env["MODAPI_SECRET_KEY"] ?? "",
});

async function run() {
  const result = await moderationApi.content.submit({
    content: {
      type: "text",
      text: "Hey, check out my profile for a deal!",
    },
    contentId: "message-48213",
    authorId: "user-1092",
    conversationId: "room-general",
    metadata: {
      "platform": "ios",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->