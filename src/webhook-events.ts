/*
 * Webhook event types, written by scripts/webhook-types.py in
 * moderation-api/sdk-generator from the webhooks in the API spec. Do not edit.
 *
 * Payloads use the API's snake_case field names.
 */

export type AuthorBlockedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.blocked";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformedAuthor;
  };
};

export type AuthorUnblockedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.unblocked";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformedAuthor;
  };
};

export type AuthorSuspendedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.suspended";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformedAuthor;
  };
};

export type AuthorUpdatedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.updated";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookAuthor;
  };
};

export type AuthorTrustLevelChangedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.trust_level_changed";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookAuthor;
  };
};

export type AuthorActionEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "author.action";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformedAuthor;
  };
};

export type QueueItemCompletedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "queue_item.resolved";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookQueueItemEvent;
  };
};

export type QueueItemActionEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "queue_item.action";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformed;
  };
};

export type QueueItemRejectedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "queue_item.rejected";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformed;
  };
};

export type QueueItemAllowedEvent = {
  /**
   * Stable event ID. Use this to dedupe retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: "queue_item.allowed";
  api_version: "v2" | (string & {});
  /**
   * ISO 8601 timestamp of when the event was emitted.
   */
  created: string;
  data: {
    object: WebhookActionPerformed;
  };
};

export type WebhookActionPerformedAuthor = {
  /**
   * Moderation action ID
   */
  id: string;
  /**
   * Customer-defined key identifying this action
   */
  key: string | null;
  /**
   * Display name of the action
   */
  name: string | null;
  /**
   * The value passed to the action when it ran
   */
  value: string | null;
  /**
   * ISO 8601 timestamp of when the action was performed
   */
  created_at: string;
  /**
   * The queue the item belongs to, if any
   */
  queue?: {
    id: string;
  };
  /**
   * The author the action was performed on
   */
  author: WebhookAuthor;
};

export type WebhookAuthor = {
  /**
   * Author ID in Moderation API
   */
  id: string;
  /**
   * The author's ID from your system
   */
  external_id?: string | null;
  /**
   * URL of the author's profile picture
   */
  profile_picture?: string | null;
  /**
   * URL of the author's external profile
   */
  external_link?: string | null;
  /**
   * Author name or identifier
   */
  name?: string | null;
  /**
   * Author email address
   */
  email?: string | null;
  /**
   * The author's company or organization
   */
  company?: string | null;
  /**
   * Timestamp when author first appeared
   */
  first_seen: number;
  /**
   * Timestamp of last activity
   */
  last_seen: number;
  /**
   * Timestamp of last incident
   */
  last_incident?: number | null;
  /**
   * Current author status
   */
  status: "enabled" | "suspended" | "blocked" | (string & {});
  trust_level: {
    /**
     * Author trust level (-1, 0, 1, 2, 3, or 4)
     */
    level: number;
    /**
     * True if the trust level was set manually by a moderator
     */
    manual: boolean;
  };
  /**
   * Block or suspension details, if applicable. Null if the author is enabled.
   */
  block: {
    /**
     * The timestamp until which they are blocked if the author is suspended.
     */
    until?: number | null;
    /**
     * The moderators reason why the author was blocked or suspended.
     */
    reason?: string | null;
  } | null;
  /**
   * Risk assessment details, if available.
   */
  risk_evaluation: {
    /**
     * Calculated risk level based on more than 10 behavioral signals.
     */
    risk_level?: number | null;
  } | null;
  metrics: {
    /**
     * Total pieces of content
     */
    total_content: number;
    /**
     * Number of flagged content pieces
     */
    flagged_content: number;
    /**
     * Average sentiment score of content (-1 to 1). Requires a sentiment model in your project.
     */
    average_sentiment?: number | null;
  };
  /**
   * Additional metadata provided by your system. We recommend including any relevant information that may assist in the moderation process.
   */
  metadata: {
    /**
     * Whether the author's email is verified
     */
    email_verified?: boolean | null;
    /**
     * Whether the author's phone number is verified
     */
    phone_verified?: boolean | null;
    /**
     * Whether the author's identity is verified
     */
    identity_verified?: boolean | null;
    /**
     * Whether the author is a paying customer
     */
    is_paying_customer?: boolean | null;
    [key: string]: unknown;
  };
};

export type WebhookQueueItemEvent = {
  item: WebhookQueueItem;
  author?: WebhookAuthor;
  queue?: {
    id: string;
  };
};

export type WebhookActionPerformed = {
  /**
   * Moderation action ID
   */
  id: string;
  /**
   * Customer-defined key identifying this action
   */
  key: string | null;
  /**
   * Display name of the action
   */
  name: string | null;
  /**
   * The value passed to the action when it ran
   */
  value: string | null;
  /**
   * ISO 8601 timestamp of when the action was performed
   */
  created_at: string;
  /**
   * The queue the item belongs to, if any
   */
  queue?: {
    id: string;
  };
  /**
   * The content item the action was performed on, if any
   */
  item?: WebhookQueueItem;
  /**
   * The author the action was performed on, if any
   */
  author?: WebhookAuthor;
};

export type WebhookQueueItem = {
  /**
   * Content ID from your system
   */
  id: string;
  /**
   * Whether the content was flagged by moderation
   */
  flagged: boolean | null;
  /**
   * Moderation labels applied to the content
   */
  labels: Array<{
    /**
     * The label name
     */
    label: string;
    /**
     * Confidence score between 0 and 1
     */
    score: number;
    /**
     * True if the label was applied manually by a moderator
     */
    manual?: boolean;
    /**
     * Whether this label crossed its flagging threshold
     */
    flagged?: boolean;
    /**
     * Whether this label crossed its threshold under a shadowed policy — reported for visibility, never counted toward a flagging decision
     */
    shadow_flagged?: boolean;
    matches?: Array<{
      /**
       * The matched substring
       */
      match: string;
      /**
       * Match confidence between 0 and 1
       */
      probability: number;
      /**
       * [start, end] character offsets in the source text
       */
      span: [number, number];
      mask?: string | null;
      reasons?: Array<string>;
      signals?: {
        brand_impersonation: {
          brand: string;
          method: string;
        } | null;
        has_suspicious_characters: boolean;
        is_link_shortener: boolean;
        domain_age_days: number | null;
        has_email_setup: boolean | null;
        redirect_count: number | null;
        final_url: string | null;
        bot_protection: boolean | null;
        is_reported: boolean;
      };
      entity_type?: string;
      scripts?: Array<string>;
      skeleton?: string;
    }>;
  }> | null;
  /**
   * For object content, the field keys (e.g. "bio") that triggered a flag. Empty when no fields were flagged or the content is not an object.
   */
  flagged_fields: Array<string>;
  /**
   * Detected ISO language code, if available
   */
  language: string | null;
  /**
   * The original content payload
   */
  content: {
    type: "text";
    /**
     * The content text
     */
    text: string;
  } | {
    type: "image";
    /**
     * A public URL of the image content. Either url or data must be provided.
     */
    url?: string;
    /**
     * Base64-encoded image data. Either url or data must be provided. Note: base64 images are not stored and will not appear in the review queue.
     */
    data?: string;
  } | {
    type: "video";
    /**
     * A public URL of the video content
     */
    url: string;
  } | {
    type: "audio";
    /**
     * The URL of the audio content
     */
    url: string;
  } | {
    type: "object";
    /**
     * Values in the object. Can be mixed content types.
     */
    data: Record<string, {
      type: "text";
      /**
       * The content text
       */
      text: string;
    } | {
      type: "image";
      /**
       * A public URL of the image content. Either url or data must be provided.
       */
      url?: string;
      /**
       * Base64-encoded image data. Either url or data must be provided. Note: base64 images are not stored and will not appear in the review queue.
       */
      data?: string;
    } | {
      type: "video";
      /**
       * A public URL of the video content
       */
      url: string;
    } | {
      type: "audio";
      /**
       * The URL of the audio content
       */
      url: string;
    }>;
  };
  /**
   * ISO 8601 timestamp of when the content was submitted
   */
  timestamp: string;
  /**
   * Customer-supplied metadata attached to the content (same shape as the moderation API `metadata` input).
   */
  metadata: Record<string, unknown> | null;
  /**
   * The recommendation you submitted via the moderation API `clientAction` input, if any.
   */
  client_action: {
    /**
     * Your recommendation for the content: allow, review, or reject.
     */
    action: "review" | "allow" | "reject" | (string & {});
    /**
     * How your recommendation combines with ours. Defaults to 'escalate', which only applies it when stricter than ours; 'override' replaces ours outright.
     */
    behavior?: "override" | "escalate" | (string & {});
    /**
     * Where your recommendation came from, e.g. "banned-ip".
     */
    source?: string;
    /**
     * A human-readable explanation for your recommendation.
     */
    reason?: string;
  } | null;
  /**
   * Conversation grouping ID, if any
   */
  conversation_id: string | null;
  /**
   * External author ID (the customer's identifier, not Moderation API's internal id)
   */
  author_id: string | null;
  /**
   * The channel the content was submitted to, identified by your customer-defined channel key.
   */
  channel_key: string | null;
  /**
   * High-level content type (e.g. message, post, comment). Defaults to the channel's configured content type but can be overridden per request via the moderation API `type` field.
   */
  meta_type: "profile" | "message" | "post" | "comment" | "event" | "product" | "review" | "voice" | "other" | (string & {}) | null;
};

/** Every webhook event type this SDK version knows. */
export type WebhookEventType = "author.blocked" | "author.unblocked" | "author.suspended" | "author.updated" | "author.trust_level_changed" | "author.action" | "queue_item.resolved" | "queue_item.action" | "queue_item.rejected" | "queue_item.allowed";

/**
 * A webhook event as delivered. Switch on `type` to narrow `data.object`.
 *
 * Events added to the API after this SDK version are delivered too, and
 * reach the `default` branch of the switch. Read them as
 * `UnknownWebhookEvent`.
 */
export type WebhookEvent = AuthorBlockedEvent | AuthorUnblockedEvent | AuthorSuspendedEvent | AuthorUpdatedEvent | AuthorTrustLevelChangedEvent | AuthorActionEvent | QueueItemCompletedEvent | QueueItemActionEvent | QueueItemRejectedEvent | QueueItemAllowedEvent;

/** An event of a type this SDK version does not know. */
export type UnknownWebhookEvent = {
  id: string;
  type: string;
  api_version: string;
  created: string;
  data: { object: Record<string, unknown> };
};

/** Return true if this SDK version knows the event's type. */
export function isKnownWebhookEvent(
  event: WebhookEvent | UnknownWebhookEvent,
): event is WebhookEvent {
  return (WEBHOOK_EVENT_TYPES as readonly string[]).includes(event.type);
}

/** Every webhook event type this SDK version knows. */
export const WEBHOOK_EVENT_TYPES: readonly WebhookEventType[] = [
  "author.blocked",
  "author.unblocked",
  "author.suspended",
  "author.updated",
  "author.trust_level_changed",
  "author.action",
  "queue_item.resolved",
  "queue_item.action",
  "queue_item.rejected",
  "queue_item.allowed",
];
