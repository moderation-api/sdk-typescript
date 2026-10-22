# ContentRequest

The content sent for moderation


## Supported Types

### `operations.TextRequest`

```typescript
const value: operations.TextRequest = {
  type: "text",
  text: "<value>",
};
```

### `operations.ImageRequest`

```typescript
const value: operations.ImageRequest = {
  type: "image",
};
```

### `operations.VideoRequest`

```typescript
const value: operations.VideoRequest = {
  type: "video",
  url: "https://winged-agreement.org/",
};
```

### `operations.AudioRequest`

```typescript
const value: operations.AudioRequest = {
  type: "audio",
  url: "https://exhausted-cassava.com",
};
```

### `operations.ObjectT`

```typescript
const value: operations.ObjectT = {
  type: "object",
  data: {},
};
```

