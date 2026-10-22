# ListChannelsResponse

## Example Usage

```typescript
import { ListChannelsResponse } from "@moderation-api/sdk/models/operations";

let value: ListChannelsResponse = {
  result: {
    data: [
      {
        id: "<id>",
        projectId: "<id>",
        key: "<key>",
        name: "<value>",
        description: "potentially scared whirlwind quizzically despite",
        isDefault: true,
        contentType: "post",
        flaggingMode: "DRY_RUN",
        contextEnabled: false,
        enableImageModeration: true,
        enableVideoModeration: false,
        enableAudioModeration: true,
        enableVoiceModeration: true,
        includeTranscriptInResponse: false,
        transcriptionQuality: "SPEED",
        unicodeSpoofDetectionEnabled: false,
        frameCaptureInterval: 7672.2,
        maxFramesPerVideo: 210135,
        spreadFrames: true,
        createdAt: "1714164139981",
        updatedAt: "1735620484537",
      },
    ],
    pagination: {
      page: 335492,
      pageSize: 148408,
      total: 57774,
      totalPages: 915803,
      hasMore: false,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `result`                                                                                      | [operations.ListChannelsResponseBody](../../models/operations/list-channels-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |