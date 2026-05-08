// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import {
  ItemListParams,
  ItemListResponse,
  ItemResolveParams,
  ItemResolveResponse,
  ItemUnresolveParams,
  ItemUnresolveResponse,
  Items,
} from './items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Queue extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Get a queue
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<QueueRetrieveResponse> {
    return this._client.get(path`/queue/${id}`, options);
  }

  /**
   * Get detailed statistics about a moderation queue including review times, action
   * counts, and trends
   */
  getStats(
    id: string,
    query: QueueGetStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueueGetStatsResponse> {
    return this._client.get(path`/queue/${id}/stats`, { query, ...options });
  }
}

/**
 * Discriminated union of every v2 webhook event. Switch on `type` to narrow to a
 * specific event shape.
 */
export type WebhookEvent =
  | WebhookEvent.AuthorBlockedEvent
  | WebhookEvent.AuthorUnblockedEvent
  | WebhookEvent.AuthorSuspendedEvent
  | WebhookEvent.AuthorUpdatedEvent
  | WebhookEvent.AuthorTrustLevelChangedEvent
  | WebhookEvent.AuthorActionEvent
  | WebhookEvent.QueueItemCompletedEvent
  | WebhookEvent.QueueItemActionEvent
  | WebhookEvent.QueueItemRejectedEvent
  | WebhookEvent.QueueItemAllowedEvent;

export namespace WebhookEvent {
  export interface AuthorBlockedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorBlockedEvent.Data;

    /**
     * The event type.
     */
    type: 'author.blocked';
  }

  export namespace AuthorBlockedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * The author the action was performed on
         */
        author: Object.Author;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface AuthorUnblockedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorUnblockedEvent.Data;

    /**
     * The event type.
     */
    type: 'author.unblocked';
  }

  export namespace AuthorUnblockedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * The author the action was performed on
         */
        author: Object.Author;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface AuthorSuspendedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorSuspendedEvent.Data;

    /**
     * The event type.
     */
    type: 'author.suspended';
  }

  export namespace AuthorSuspendedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * The author the action was performed on
         */
        author: Object.Author;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface AuthorUpdatedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorUpdatedEvent.Data;

    /**
     * The event type.
     */
    type: 'author.updated';
  }

  export namespace AuthorUpdatedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Author ID in Moderation API
         */
        id: string;

        /**
         * Block or suspension details, if applicable. Null if the author is enabled.
         */
        block: Object.Block | null;

        /**
         * Timestamp when author first appeared
         */
        first_seen: number;

        /**
         * Timestamp of last activity
         */
        last_seen: number;

        /**
         * Additional metadata provided by your system. We recommend including any relevant
         * information that may assist in the moderation process.
         */
        metadata: Object.Metadata;

        metrics: Object.Metrics;

        /**
         * Risk assessment details, if available.
         */
        risk_evaluation: Object.RiskEvaluation | null;

        /**
         * Current author status
         */
        status: 'enabled' | 'suspended' | 'blocked';

        trust_level: Object.TrustLevel;

        /**
         * The author's company or organization
         */
        company?: string | null;

        /**
         * Author email address
         */
        email?: string | null;

        /**
         * The author's ID from your system
         */
        external_id?: string | null;

        /**
         * URL of the author's external profile
         */
        external_link?: string | null;

        /**
         * Timestamp of last incident
         */
        last_incident?: number | null;

        /**
         * Author name or identifier
         */
        name?: string | null;

        /**
         * URL of the author's profile picture
         */
        profile_picture?: string | null;
      }

      export namespace Object {
        /**
         * Block or suspension details, if applicable. Null if the author is enabled.
         */
        export interface Block {
          /**
           * The moderators reason why the author was blocked or suspended.
           */
          reason?: string | null;

          /**
           * The timestamp until which they are blocked if the author is suspended.
           */
          until?: number | null;
        }

        /**
         * Additional metadata provided by your system. We recommend including any relevant
         * information that may assist in the moderation process.
         */
        export interface Metadata {
          /**
           * Whether the author's email is verified
           */
          email_verified?: boolean | null;

          /**
           * Whether the author's identity is verified
           */
          identity_verified?: boolean | null;

          /**
           * Whether the author is a paying customer
           */
          is_paying_customer?: boolean | null;

          /**
           * Whether the author's phone number is verified
           */
          phone_verified?: boolean | null;

          [k: string]: unknown;
        }

        export interface Metrics {
          /**
           * Number of flagged content pieces
           */
          flagged_content: number;

          /**
           * Total pieces of content
           */
          total_content: number;

          /**
           * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
           * project.
           */
          average_sentiment?: number | null;
        }

        /**
         * Risk assessment details, if available.
         */
        export interface RiskEvaluation {
          /**
           * Calculated risk level based on more than 10 behavioral signals.
           */
          risk_level?: number | null;
        }

        export interface TrustLevel {
          /**
           * Author trust level (-1, 0, 1, 2, 3, or 4)
           */
          level: number;

          /**
           * True if the trust level was set manually by a moderator
           */
          manual: boolean;
        }
      }
    }
  }

  export interface AuthorTrustLevelChangedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorTrustLevelChangedEvent.Data;

    /**
     * The event type.
     */
    type: 'author.trust_level_changed';
  }

  export namespace AuthorTrustLevelChangedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Author ID in Moderation API
         */
        id: string;

        /**
         * Block or suspension details, if applicable. Null if the author is enabled.
         */
        block: Object.Block | null;

        /**
         * Timestamp when author first appeared
         */
        first_seen: number;

        /**
         * Timestamp of last activity
         */
        last_seen: number;

        /**
         * Additional metadata provided by your system. We recommend including any relevant
         * information that may assist in the moderation process.
         */
        metadata: Object.Metadata;

        metrics: Object.Metrics;

        /**
         * Risk assessment details, if available.
         */
        risk_evaluation: Object.RiskEvaluation | null;

        /**
         * Current author status
         */
        status: 'enabled' | 'suspended' | 'blocked';

        trust_level: Object.TrustLevel;

        /**
         * The author's company or organization
         */
        company?: string | null;

        /**
         * Author email address
         */
        email?: string | null;

        /**
         * The author's ID from your system
         */
        external_id?: string | null;

        /**
         * URL of the author's external profile
         */
        external_link?: string | null;

        /**
         * Timestamp of last incident
         */
        last_incident?: number | null;

        /**
         * Author name or identifier
         */
        name?: string | null;

        /**
         * URL of the author's profile picture
         */
        profile_picture?: string | null;
      }

      export namespace Object {
        /**
         * Block or suspension details, if applicable. Null if the author is enabled.
         */
        export interface Block {
          /**
           * The moderators reason why the author was blocked or suspended.
           */
          reason?: string | null;

          /**
           * The timestamp until which they are blocked if the author is suspended.
           */
          until?: number | null;
        }

        /**
         * Additional metadata provided by your system. We recommend including any relevant
         * information that may assist in the moderation process.
         */
        export interface Metadata {
          /**
           * Whether the author's email is verified
           */
          email_verified?: boolean | null;

          /**
           * Whether the author's identity is verified
           */
          identity_verified?: boolean | null;

          /**
           * Whether the author is a paying customer
           */
          is_paying_customer?: boolean | null;

          /**
           * Whether the author's phone number is verified
           */
          phone_verified?: boolean | null;

          [k: string]: unknown;
        }

        export interface Metrics {
          /**
           * Number of flagged content pieces
           */
          flagged_content: number;

          /**
           * Total pieces of content
           */
          total_content: number;

          /**
           * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
           * project.
           */
          average_sentiment?: number | null;
        }

        /**
         * Risk assessment details, if available.
         */
        export interface RiskEvaluation {
          /**
           * Calculated risk level based on more than 10 behavioral signals.
           */
          risk_level?: number | null;
        }

        export interface TrustLevel {
          /**
           * Author trust level (-1, 0, 1, 2, 3, or 4)
           */
          level: number;

          /**
           * True if the trust level was set manually by a moderator
           */
          manual: boolean;
        }
      }
    }
  }

  export interface AuthorActionEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: AuthorActionEvent.Data;

    /**
     * The event type.
     */
    type: 'author.action';
  }

  export namespace AuthorActionEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * The author the action was performed on
         */
        author: Object.Author;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface QueueItemCompletedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: QueueItemCompletedEvent.Data;

    /**
     * The event type.
     */
    type: 'queue_item.resolved';
  }

  export namespace QueueItemCompletedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        item: Object.Item;

        author?: Object.Author;

        queue?: Object.Queue;
      }

      export namespace Object {
        export interface Item {
          /**
           * Content ID from your system
           */
          id: string;

          /**
           * External author ID (the customer's identifier, not Moderation API's internal id)
           */
          author_id: string | null;

          /**
           * The channel the content was submitted to, identified by your customer-defined
           * channel key.
           */
          channel_key: string | null;

          /**
           * The original content payload
           */
          content: Item.Text | Item.Image | Item.Video | Item.Audio | Item.Object;

          /**
           * Conversation grouping ID, if any
           */
          conversation_id: string | null;

          /**
           * Whether the content was flagged by moderation
           */
          flagged: boolean | null;

          /**
           * Moderation labels applied to the content
           */
          labels: Array<Item.Label> | null;

          /**
           * Detected ISO language code, if available
           */
          language: string | null;

          /**
           * High-level content type (e.g. message, post, comment). Defaults to the channel's
           * configured content type but can be overridden per request via the moderation API
           * `type` field.
           */
          meta_type:
            | 'profile'
            | 'message'
            | 'post'
            | 'comment'
            | 'event'
            | 'product'
            | 'review'
            | 'other'
            | null;

          /**
           * Arbitrary key/value metadata. Top-level keys are strings.
           */
          metadata: { [key: string]: unknown } | null;

          /**
           * ISO 8601 timestamp of when the content was submitted
           */
          timestamp: string;
        }

        export namespace Item {
          /**
           * Text
           */
          export interface Text {
            /**
             * The content text
             */
            text: string;

            type: 'text';
          }

          /**
           * Image
           */
          export interface Image {
            type: 'image';

            /**
             * Base64-encoded image data. Either url or data must be provided. Note: base64
             * images are not stored and will not appear in the review queue.
             */
            data?: string;

            /**
             * A public URL of the image content. Either url or data must be provided.
             */
            url?: string;
          }

          /**
           * Video
           */
          export interface Video {
            type: 'video';

            /**
             * A public URL of the video content
             */
            url: string;
          }

          /**
           * Audio
           */
          export interface Audio {
            type: 'audio';

            /**
             * The URL of the audio content
             */
            url: string;
          }

          /**
           * Object
           */
          export interface Object {
            /**
             * Values in the object. Can be mixed content types.
             */
            data: { [key: string]: Object.Text | Object.Image | Object.Video | Object.Audio };

            type: 'object';
          }

          export namespace Object {
            /**
             * Text
             */
            export interface Text {
              /**
               * The content text
               */
              text: string;

              type: 'text';
            }

            /**
             * Image
             */
            export interface Image {
              type: 'image';

              /**
               * Base64-encoded image data. Either url or data must be provided. Note: base64
               * images are not stored and will not appear in the review queue.
               */
              data?: string;

              /**
               * A public URL of the image content. Either url or data must be provided.
               */
              url?: string;
            }

            /**
             * Video
             */
            export interface Video {
              type: 'video';

              /**
               * A public URL of the video content
               */
              url: string;
            }

            /**
             * Audio
             */
            export interface Audio {
              type: 'audio';

              /**
               * The URL of the audio content
               */
              url: string;
            }
          }

          export interface Label {
            /**
             * The label name
             */
            label: string;

            /**
             * Confidence score between 0 and 1
             */
            score: number;

            /**
             * Whether this label crossed its flagging threshold
             */
            flagged?: boolean;

            /**
             * True if the label was applied manually by a moderator
             */
            manual?: boolean;

            matches?: Array<Label.Match>;
          }

          export namespace Label {
            export interface Match {
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
              span: Array<unknown>;

              entity_type?: string;

              mask?: string | null;

              reasons?: Array<string>;

              signals?: Match.Signals;
            }

            export namespace Match {
              export interface Signals {
                bot_protection: boolean | null;

                brand_impersonation: Signals.BrandImpersonation | null;

                domain_age_days: number | null;

                final_url: string | null;

                has_email_setup: boolean | null;

                has_suspicious_characters: boolean;

                is_link_shortener: boolean;

                is_reported: boolean;

                redirect_count: number | null;
              }

              export namespace Signals {
                export interface BrandImpersonation {
                  brand: string;

                  method: string;
                }
              }
            }
          }
        }

        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface QueueItemActionEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: QueueItemActionEvent.Data;

    /**
     * The event type.
     */
    type: 'queue_item.action';
  }

  export namespace QueueItemActionEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The author the action was performed on, if any
         */
        author?: Object.Author;

        /**
         * The content item the action was performed on, if any
         */
        item?: Object.Item;

        /**
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on, if any
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The content item the action was performed on, if any
         */
        export interface Item {
          /**
           * Content ID from your system
           */
          id: string;

          /**
           * External author ID (the customer's identifier, not Moderation API's internal id)
           */
          author_id: string | null;

          /**
           * The channel the content was submitted to, identified by your customer-defined
           * channel key.
           */
          channel_key: string | null;

          /**
           * The original content payload
           */
          content: Item.Text | Item.Image | Item.Video | Item.Audio | Item.Object;

          /**
           * Conversation grouping ID, if any
           */
          conversation_id: string | null;

          /**
           * Whether the content was flagged by moderation
           */
          flagged: boolean | null;

          /**
           * Moderation labels applied to the content
           */
          labels: Array<Item.Label> | null;

          /**
           * Detected ISO language code, if available
           */
          language: string | null;

          /**
           * High-level content type (e.g. message, post, comment). Defaults to the channel's
           * configured content type but can be overridden per request via the moderation API
           * `type` field.
           */
          meta_type:
            | 'profile'
            | 'message'
            | 'post'
            | 'comment'
            | 'event'
            | 'product'
            | 'review'
            | 'other'
            | null;

          /**
           * Arbitrary key/value metadata. Top-level keys are strings.
           */
          metadata: { [key: string]: unknown } | null;

          /**
           * ISO 8601 timestamp of when the content was submitted
           */
          timestamp: string;
        }

        export namespace Item {
          /**
           * Text
           */
          export interface Text {
            /**
             * The content text
             */
            text: string;

            type: 'text';
          }

          /**
           * Image
           */
          export interface Image {
            type: 'image';

            /**
             * Base64-encoded image data. Either url or data must be provided. Note: base64
             * images are not stored and will not appear in the review queue.
             */
            data?: string;

            /**
             * A public URL of the image content. Either url or data must be provided.
             */
            url?: string;
          }

          /**
           * Video
           */
          export interface Video {
            type: 'video';

            /**
             * A public URL of the video content
             */
            url: string;
          }

          /**
           * Audio
           */
          export interface Audio {
            type: 'audio';

            /**
             * The URL of the audio content
             */
            url: string;
          }

          /**
           * Object
           */
          export interface Object {
            /**
             * Values in the object. Can be mixed content types.
             */
            data: { [key: string]: Object.Text | Object.Image | Object.Video | Object.Audio };

            type: 'object';
          }

          export namespace Object {
            /**
             * Text
             */
            export interface Text {
              /**
               * The content text
               */
              text: string;

              type: 'text';
            }

            /**
             * Image
             */
            export interface Image {
              type: 'image';

              /**
               * Base64-encoded image data. Either url or data must be provided. Note: base64
               * images are not stored and will not appear in the review queue.
               */
              data?: string;

              /**
               * A public URL of the image content. Either url or data must be provided.
               */
              url?: string;
            }

            /**
             * Video
             */
            export interface Video {
              type: 'video';

              /**
               * A public URL of the video content
               */
              url: string;
            }

            /**
             * Audio
             */
            export interface Audio {
              type: 'audio';

              /**
               * The URL of the audio content
               */
              url: string;
            }
          }

          export interface Label {
            /**
             * The label name
             */
            label: string;

            /**
             * Confidence score between 0 and 1
             */
            score: number;

            /**
             * Whether this label crossed its flagging threshold
             */
            flagged?: boolean;

            /**
             * True if the label was applied manually by a moderator
             */
            manual?: boolean;

            matches?: Array<Label.Match>;
          }

          export namespace Label {
            export interface Match {
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
              span: Array<unknown>;

              entity_type?: string;

              mask?: string | null;

              reasons?: Array<string>;

              signals?: Match.Signals;
            }

            export namespace Match {
              export interface Signals {
                bot_protection: boolean | null;

                brand_impersonation: Signals.BrandImpersonation | null;

                domain_age_days: number | null;

                final_url: string | null;

                has_email_setup: boolean | null;

                has_suspicious_characters: boolean;

                is_link_shortener: boolean;

                is_reported: boolean;

                redirect_count: number | null;
              }

              export namespace Signals {
                export interface BrandImpersonation {
                  brand: string;

                  method: string;
                }
              }
            }
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface QueueItemRejectedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: QueueItemRejectedEvent.Data;

    /**
     * The event type.
     */
    type: 'queue_item.rejected';
  }

  export namespace QueueItemRejectedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The author the action was performed on, if any
         */
        author?: Object.Author;

        /**
         * The content item the action was performed on, if any
         */
        item?: Object.Item;

        /**
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on, if any
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The content item the action was performed on, if any
         */
        export interface Item {
          /**
           * Content ID from your system
           */
          id: string;

          /**
           * External author ID (the customer's identifier, not Moderation API's internal id)
           */
          author_id: string | null;

          /**
           * The channel the content was submitted to, identified by your customer-defined
           * channel key.
           */
          channel_key: string | null;

          /**
           * The original content payload
           */
          content: Item.Text | Item.Image | Item.Video | Item.Audio | Item.Object;

          /**
           * Conversation grouping ID, if any
           */
          conversation_id: string | null;

          /**
           * Whether the content was flagged by moderation
           */
          flagged: boolean | null;

          /**
           * Moderation labels applied to the content
           */
          labels: Array<Item.Label> | null;

          /**
           * Detected ISO language code, if available
           */
          language: string | null;

          /**
           * High-level content type (e.g. message, post, comment). Defaults to the channel's
           * configured content type but can be overridden per request via the moderation API
           * `type` field.
           */
          meta_type:
            | 'profile'
            | 'message'
            | 'post'
            | 'comment'
            | 'event'
            | 'product'
            | 'review'
            | 'other'
            | null;

          /**
           * Arbitrary key/value metadata. Top-level keys are strings.
           */
          metadata: { [key: string]: unknown } | null;

          /**
           * ISO 8601 timestamp of when the content was submitted
           */
          timestamp: string;
        }

        export namespace Item {
          /**
           * Text
           */
          export interface Text {
            /**
             * The content text
             */
            text: string;

            type: 'text';
          }

          /**
           * Image
           */
          export interface Image {
            type: 'image';

            /**
             * Base64-encoded image data. Either url or data must be provided. Note: base64
             * images are not stored and will not appear in the review queue.
             */
            data?: string;

            /**
             * A public URL of the image content. Either url or data must be provided.
             */
            url?: string;
          }

          /**
           * Video
           */
          export interface Video {
            type: 'video';

            /**
             * A public URL of the video content
             */
            url: string;
          }

          /**
           * Audio
           */
          export interface Audio {
            type: 'audio';

            /**
             * The URL of the audio content
             */
            url: string;
          }

          /**
           * Object
           */
          export interface Object {
            /**
             * Values in the object. Can be mixed content types.
             */
            data: { [key: string]: Object.Text | Object.Image | Object.Video | Object.Audio };

            type: 'object';
          }

          export namespace Object {
            /**
             * Text
             */
            export interface Text {
              /**
               * The content text
               */
              text: string;

              type: 'text';
            }

            /**
             * Image
             */
            export interface Image {
              type: 'image';

              /**
               * Base64-encoded image data. Either url or data must be provided. Note: base64
               * images are not stored and will not appear in the review queue.
               */
              data?: string;

              /**
               * A public URL of the image content. Either url or data must be provided.
               */
              url?: string;
            }

            /**
             * Video
             */
            export interface Video {
              type: 'video';

              /**
               * A public URL of the video content
               */
              url: string;
            }

            /**
             * Audio
             */
            export interface Audio {
              type: 'audio';

              /**
               * The URL of the audio content
               */
              url: string;
            }
          }

          export interface Label {
            /**
             * The label name
             */
            label: string;

            /**
             * Confidence score between 0 and 1
             */
            score: number;

            /**
             * Whether this label crossed its flagging threshold
             */
            flagged?: boolean;

            /**
             * True if the label was applied manually by a moderator
             */
            manual?: boolean;

            matches?: Array<Label.Match>;
          }

          export namespace Label {
            export interface Match {
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
              span: Array<unknown>;

              entity_type?: string;

              mask?: string | null;

              reasons?: Array<string>;

              signals?: Match.Signals;
            }

            export namespace Match {
              export interface Signals {
                bot_protection: boolean | null;

                brand_impersonation: Signals.BrandImpersonation | null;

                domain_age_days: number | null;

                final_url: string | null;

                has_email_setup: boolean | null;

                has_suspicious_characters: boolean;

                is_link_shortener: boolean;

                is_reported: boolean;

                redirect_count: number | null;
              }

              export namespace Signals {
                export interface BrandImpersonation {
                  brand: string;

                  method: string;
                }
              }
            }
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }

  export interface QueueItemAllowedEvent {
    /**
     * Stable event ID. Use this to dedupe retries.
     */
    id: string;

    api_version: 'v2';

    /**
     * ISO 8601 timestamp of when the event was emitted.
     */
    created: string;

    data: QueueItemAllowedEvent.Data;

    /**
     * The event type.
     */
    type: 'queue_item.allowed';
  }

  export namespace QueueItemAllowedEvent {
    export interface Data {
      object: Data.Object;
    }

    export namespace Data {
      export interface Object {
        /**
         * Moderation action ID
         */
        id: string;

        /**
         * ISO 8601 timestamp of when the action was performed
         */
        created_at: string;

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
         * The author the action was performed on, if any
         */
        author?: Object.Author;

        /**
         * The content item the action was performed on, if any
         */
        item?: Object.Item;

        /**
         * The queue the item belongs to, if any
         */
        queue?: Object.Queue;
      }

      export namespace Object {
        /**
         * The author the action was performed on, if any
         */
        export interface Author {
          /**
           * Author ID in Moderation API
           */
          id: string;

          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          block: Author.Block | null;

          /**
           * Timestamp when author first appeared
           */
          first_seen: number;

          /**
           * Timestamp of last activity
           */
          last_seen: number;

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          metadata: Author.Metadata;

          metrics: Author.Metrics;

          /**
           * Risk assessment details, if available.
           */
          risk_evaluation: Author.RiskEvaluation | null;

          /**
           * Current author status
           */
          status: 'enabled' | 'suspended' | 'blocked';

          trust_level: Author.TrustLevel;

          /**
           * The author's company or organization
           */
          company?: string | null;

          /**
           * Author email address
           */
          email?: string | null;

          /**
           * The author's ID from your system
           */
          external_id?: string | null;

          /**
           * URL of the author's external profile
           */
          external_link?: string | null;

          /**
           * Timestamp of last incident
           */
          last_incident?: number | null;

          /**
           * Author name or identifier
           */
          name?: string | null;

          /**
           * URL of the author's profile picture
           */
          profile_picture?: string | null;
        }

        export namespace Author {
          /**
           * Block or suspension details, if applicable. Null if the author is enabled.
           */
          export interface Block {
            /**
             * The moderators reason why the author was blocked or suspended.
             */
            reason?: string | null;

            /**
             * The timestamp until which they are blocked if the author is suspended.
             */
            until?: number | null;
          }

          /**
           * Additional metadata provided by your system. We recommend including any relevant
           * information that may assist in the moderation process.
           */
          export interface Metadata {
            /**
             * Whether the author's email is verified
             */
            email_verified?: boolean | null;

            /**
             * Whether the author's identity is verified
             */
            identity_verified?: boolean | null;

            /**
             * Whether the author is a paying customer
             */
            is_paying_customer?: boolean | null;

            /**
             * Whether the author's phone number is verified
             */
            phone_verified?: boolean | null;

            [k: string]: unknown;
          }

          export interface Metrics {
            /**
             * Number of flagged content pieces
             */
            flagged_content: number;

            /**
             * Total pieces of content
             */
            total_content: number;

            /**
             * Average sentiment score of content (-1 to 1). Requires a sentiment model in your
             * project.
             */
            average_sentiment?: number | null;
          }

          /**
           * Risk assessment details, if available.
           */
          export interface RiskEvaluation {
            /**
             * Calculated risk level based on more than 10 behavioral signals.
             */
            risk_level?: number | null;
          }

          export interface TrustLevel {
            /**
             * Author trust level (-1, 0, 1, 2, 3, or 4)
             */
            level: number;

            /**
             * True if the trust level was set manually by a moderator
             */
            manual: boolean;
          }
        }

        /**
         * The content item the action was performed on, if any
         */
        export interface Item {
          /**
           * Content ID from your system
           */
          id: string;

          /**
           * External author ID (the customer's identifier, not Moderation API's internal id)
           */
          author_id: string | null;

          /**
           * The channel the content was submitted to, identified by your customer-defined
           * channel key.
           */
          channel_key: string | null;

          /**
           * The original content payload
           */
          content: Item.Text | Item.Image | Item.Video | Item.Audio | Item.Object;

          /**
           * Conversation grouping ID, if any
           */
          conversation_id: string | null;

          /**
           * Whether the content was flagged by moderation
           */
          flagged: boolean | null;

          /**
           * Moderation labels applied to the content
           */
          labels: Array<Item.Label> | null;

          /**
           * Detected ISO language code, if available
           */
          language: string | null;

          /**
           * High-level content type (e.g. message, post, comment). Defaults to the channel's
           * configured content type but can be overridden per request via the moderation API
           * `type` field.
           */
          meta_type:
            | 'profile'
            | 'message'
            | 'post'
            | 'comment'
            | 'event'
            | 'product'
            | 'review'
            | 'other'
            | null;

          /**
           * Arbitrary key/value metadata. Top-level keys are strings.
           */
          metadata: { [key: string]: unknown } | null;

          /**
           * ISO 8601 timestamp of when the content was submitted
           */
          timestamp: string;
        }

        export namespace Item {
          /**
           * Text
           */
          export interface Text {
            /**
             * The content text
             */
            text: string;

            type: 'text';
          }

          /**
           * Image
           */
          export interface Image {
            type: 'image';

            /**
             * Base64-encoded image data. Either url or data must be provided. Note: base64
             * images are not stored and will not appear in the review queue.
             */
            data?: string;

            /**
             * A public URL of the image content. Either url or data must be provided.
             */
            url?: string;
          }

          /**
           * Video
           */
          export interface Video {
            type: 'video';

            /**
             * A public URL of the video content
             */
            url: string;
          }

          /**
           * Audio
           */
          export interface Audio {
            type: 'audio';

            /**
             * The URL of the audio content
             */
            url: string;
          }

          /**
           * Object
           */
          export interface Object {
            /**
             * Values in the object. Can be mixed content types.
             */
            data: { [key: string]: Object.Text | Object.Image | Object.Video | Object.Audio };

            type: 'object';
          }

          export namespace Object {
            /**
             * Text
             */
            export interface Text {
              /**
               * The content text
               */
              text: string;

              type: 'text';
            }

            /**
             * Image
             */
            export interface Image {
              type: 'image';

              /**
               * Base64-encoded image data. Either url or data must be provided. Note: base64
               * images are not stored and will not appear in the review queue.
               */
              data?: string;

              /**
               * A public URL of the image content. Either url or data must be provided.
               */
              url?: string;
            }

            /**
             * Video
             */
            export interface Video {
              type: 'video';

              /**
               * A public URL of the video content
               */
              url: string;
            }

            /**
             * Audio
             */
            export interface Audio {
              type: 'audio';

              /**
               * The URL of the audio content
               */
              url: string;
            }
          }

          export interface Label {
            /**
             * The label name
             */
            label: string;

            /**
             * Confidence score between 0 and 1
             */
            score: number;

            /**
             * Whether this label crossed its flagging threshold
             */
            flagged?: boolean;

            /**
             * True if the label was applied manually by a moderator
             */
            manual?: boolean;

            matches?: Array<Label.Match>;
          }

          export namespace Label {
            export interface Match {
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
              span: Array<unknown>;

              entity_type?: string;

              mask?: string | null;

              reasons?: Array<string>;

              signals?: Match.Signals;
            }

            export namespace Match {
              export interface Signals {
                bot_protection: boolean | null;

                brand_impersonation: Signals.BrandImpersonation | null;

                domain_age_days: number | null;

                final_url: string | null;

                has_email_setup: boolean | null;

                has_suspicious_characters: boolean;

                is_link_shortener: boolean;

                is_reported: boolean;

                redirect_count: number | null;
              }

              export namespace Signals {
                export interface BrandImpersonation {
                  brand: string;

                  method: string;
                }
              }
            }
          }
        }

        /**
         * The queue the item belongs to, if any
         */
        export interface Queue {
          id: string;
        }
      }
    }
  }
}

export interface QueueRetrieveResponse {
  queue: QueueRetrieveResponse.Queue;
}

export namespace QueueRetrieveResponse {
  export interface Queue {
    id: string;

    description: string;

    filter: Queue.Filter;

    name: string;

    resolvedItemsCount: number;

    totalItemsCount: number;

    unresolvedItemsCount: number;
  }

  export namespace Queue {
    export interface Filter {
      afterDate?: string;

      authorID?: string;

      beforeDate?: string;

      conversationIds?: Array<string | null>;

      filteredActionIds?: Array<string>;

      filteredChannelIds?: Array<string>;

      filterLabels?: Array<Filter.FilterLabel>;

      labels?: Array<string>;

      recommendationActions?: Array<'review' | 'allow' | 'reject'>;

      showChecked?: boolean;
    }

    export namespace Filter {
      export interface FilterLabel {
        label: string;

        type: 'FLAGGED' | 'NOT_FLAGGED' | 'THRESHOLDS';

        maxThreshold?: number | null;

        minThreshold?: number | null;
      }
    }
  }
}

export interface QueueGetStatsResponse {
  actionStats: Array<QueueGetStatsResponse.ActionStat>;

  reviewStats: QueueGetStatsResponse.ReviewStats;

  /**
   * List of top reviewers and their statistics
   */
  topReviewers: Array<QueueGetStatsResponse.TopReviewer>;

  trends: QueueGetStatsResponse.Trends;
}

export namespace QueueGetStatsResponse {
  export interface ActionStat {
    /**
     * ID of the moderation action
     */
    actionId: string;

    /**
     * Name of the moderation action
     */
    actionName: string;

    /**
     * Number of times this action was taken
     */
    count: number;

    /**
     * Percentage this action represents of all actions
     */
    percentageOfTotal: number;
  }

  export interface ReviewStats {
    /**
     * Average time in milliseconds to review an item
     */
    averageTimeToReview: number;

    /**
     * Total number of items pending review
     */
    totalPending: number;

    /**
     * Total number of items reviewed
     */
    totalReviewed: number;
  }

  export interface TopReviewer {
    /**
     * Average review time in milliseconds
     */
    averageTimePerReview: number;

    /**
     * Name of the reviewer
     */
    name: string;

    /**
     * Number of items reviewed
     */
    reviewCount: number;

    /**
     * Most common actions taken by this reviewer
     */
    topActions: Array<TopReviewer.TopAction>;

    /**
     * ID of the reviewer
     */
    userId: string;

    /**
     * Optional accuracy score based on review quality metrics
     */
    accuracyScore?: number;
  }

  export namespace TopReviewer {
    export interface TopAction {
      /**
       * Most used action by this reviewer
       */
      actionId: string;

      /**
       * Name of the most used action
       */
      actionName: string;

      /**
       * Number of times this action was used
       */
      count: number;
    }
  }

  export interface Trends {
    dailyReviewCounts: Array<Trends.DailyReviewCount>;

    flaggedContentTrends: Array<Trends.FlaggedContentTrend>;
  }

  export namespace Trends {
    export interface DailyReviewCount {
      /**
       * Number of reviews on this date
       */
      count: number;

      /**
       * Date in YYYY-MM-DD format
       */
      date: string;
    }

    export interface FlaggedContentTrend {
      /**
       * Content flag/label
       */
      label: string;

      /**
       * Trend indicator (-1 to 1) showing if this type of flagged content is increasing
       * or decreasing
       */
      trend: number;
    }
  }
}

export interface QueueGetStatsParams {
  /**
   * Number of days to analyze statistics for
   */
  withinDays?: string;
}

Queue.Items = Items;

export declare namespace Queue {
  export {
    type WebhookEvent as WebhookEvent,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueGetStatsResponse as QueueGetStatsResponse,
    type QueueGetStatsParams as QueueGetStatsParams,
  };

  export {
    Items as Items,
    type ItemListResponse as ItemListResponse,
    type ItemResolveResponse as ItemResolveResponse,
    type ItemUnresolveResponse as ItemUnresolveResponse,
    type ItemListParams as ItemListParams,
    type ItemResolveParams as ItemResolveParams,
    type ItemUnresolveParams as ItemUnresolveParams,
  };
}
