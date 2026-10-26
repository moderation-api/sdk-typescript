# GetAnalyticsSummaryQueryParamRange

The time window. `24h` is the last 24 hours, in hourly buckets. `7d`, `30d` and `90d` are whole UTC days that end with today, in daily buckets.

## Example Usage

```typescript
import { GetAnalyticsSummaryQueryParamRange } from "@moderation-api/sdk/models/operations";

let value: GetAnalyticsSummaryQueryParamRange = "30d";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d"
```