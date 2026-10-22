# Channel

## Example Usage

```typescript
import { Channel } from "@moderation-api/sdk/models";

let value: Channel = {
  id: "<id>",
  projectId: "<id>",
  key: "<key>",
  name: "<value>",
  description: "guzzle cycle mindless closed descent amid come following",
  isDefault: true,
  contentType: "comment",
  flaggingMode: "DRY_RUN",
  contextEnabled: false,
  enableImageModeration: true,
  enableVideoModeration: true,
  enableAudioModeration: false,
  enableVoiceModeration: true,
  includeTranscriptInResponse: true,
  transcriptionQuality: "ACCURACY",
  unicodeSpoofDetectionEnabled: true,
  frameCaptureInterval: 8968.21,
  maxFramesPerVideo: 33965,
  spreadFrames: false,
  createdAt: "1711900221733",
  updatedAt: "1735606622069",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | The ID of the channel.                                                                    |
| `projectId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | The ID of the project the channel is in.                                                  |
| `key`                                                                                     | *string*                                                                                  | :heavy_check_mark:                                                                        | The key you pass as `channel` when you moderate content. Unique in the project.           |
| `name`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | The channel's name.                                                                       |
| `description`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | The channel's description.                                                                |
| `isDefault`                                                                               | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether requests that name no channel use this one. Each project has one default channel. |
| `contentType`                                                                             | [models.ContentType](../models/content-type.md)                                           | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `flaggingMode`                                                                            | [models.FlaggingMode](../models/flagging-mode.md)                                         | :heavy_check_mark:                                                                        | `ACTIVE` flags content. `DRY_RUN` evaluates content without flagging it.                  |
| `contextEnabled`                                                                          | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether earlier messages in the conversation are read when moderating a message.          |
| `enableImageModeration`                                                                   | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether images are moderated.                                                             |
| `enableVideoModeration`                                                                   | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether videos are moderated.                                                             |
| `enableAudioModeration`                                                                   | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether audio is moderated.                                                               |
| `enableVoiceModeration`                                                                   | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether real-time voice streams are moderated.                                            |
| `includeTranscriptInResponse`                                                             | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether audio and video transcripts are returned in responses.                            |
| `transcriptionQuality`                                                                    | [models.TranscriptionQuality](../models/transcription-quality.md)                         | :heavy_check_mark:                                                                        | Trade-off between transcription speed and accuracy.                                       |
| `unicodeSpoofDetectionEnabled`                                                            | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether look-alike Unicode characters are normalized before moderation.                   |
| `frameCaptureInterval`                                                                    | *number*                                                                                  | :heavy_check_mark:                                                                        | Seconds between frames captured from a video.                                             |
| `maxFramesPerVideo`                                                                       | *number*                                                                                  | :heavy_check_mark:                                                                        | The most frames moderated per video.                                                      |
| `spreadFrames`                                                                            | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether frames are spread evenly across the whole video.                                  |
| `createdAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | When the channel was created.                                                             |
| `updatedAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | When the channel was last changed.                                                        |