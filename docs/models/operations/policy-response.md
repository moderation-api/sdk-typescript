# PolicyResponse

Policy output schema.


## Supported Types

### `operations.ClassifierOutput`

```typescript
const value: operations.ClassifierOutput = {
  id: "<id>",
  type: "classifier",
  probability: 8955.39,
  flagged: false,
};
```

### `operations.EntityMatcherOutput`

```typescript
const value: operations.EntityMatcherOutput = {
  id: "<id>",
  type: "entity_matcher",
  probability: 7358.02,
  flagged: false,
  matches: [],
};
```

