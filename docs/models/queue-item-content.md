# QueueItemContent


## Supported Types

### `models.QueueItemText`

```typescript
const value: models.QueueItemText = {
  type: "text",
  text: "<value>",
};
```

### `models.QueueItemImage`

```typescript
const value: models.QueueItemImage = {
  type: "image",
};
```

### `models.QueueItemVideo`

```typescript
const value: models.QueueItemVideo = {
  type: "video",
  url: "https://grumpy-morning.com",
};
```

### `models.QueueItemAudio`

```typescript
const value: models.QueueItemAudio = {
  type: "audio",
  url: "https://close-alliance.info",
};
```

### `models.QueueItemObject`

```typescript
const value: models.QueueItemObject = {
  type: "object",
  data: {
    "key": {
      type: "video",
      url: "https://oily-marathon.biz",
    },
  },
};
```

