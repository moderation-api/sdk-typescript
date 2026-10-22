# Modified


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

### `{ [k: string]: operations.ContentLeafResponse }`

```typescript
const value: { [k: string]: operations.ContentLeafResponse } = {
  "key": {
    type: "text",
    text: "<value>",
  },
};
```

