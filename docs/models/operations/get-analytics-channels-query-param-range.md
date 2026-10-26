# GetAnalyticsChannelsQueryParamRange

The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.

## Example Usage

```typescript
import { GetAnalyticsChannelsQueryParamRange } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsChannelsQueryParamRange = "24h";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d"
```