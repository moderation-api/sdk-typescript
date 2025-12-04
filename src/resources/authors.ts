// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Authors extends APIResource {
  /**
   * Create a new author. Typically not needed as authors are created automatically
   * when content is moderated.
   */
  create(body: AuthorCreateParams, options?: RequestOptions): APIPromise<AuthorCreateResponse> {
    return this._client.post('/authors', { body, ...options });
  }

  /**
   * Get detailed information about a specific author including historical data and
   * analysis
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuthorRetrieveResponse> {
    return this._client.get(path`/authors/${id}`, options);
  }

  /**
   * Update the details of a specific author
   */
  update(id: string, body: AuthorUpdateParams, options?: RequestOptions): APIPromise<AuthorUpdateResponse> {
    return this._client.put(path`/authors/${id}`, { body, ...options });
  }

  /**
   * Get a paginated list of authors with their activity metrics and reputation
   */
  list(
    query: AuthorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthorListResponse> {
    return this._client.get('/authors', { query, ...options });
  }

  /**
   * Delete a specific author
   */
  delete(id: string, options?: RequestOptions): APIPromise<AuthorDeleteResponse> {
    return this._client.delete(path`/authors/${id}`, options);
  }
}

export interface AuthorCreateResponse {
  /**
   * Author ID in Moderation API
   */
  id: string;

  /**
   * Block or suspension details, if applicable. Null if the author is enabled.
   */
  block: AuthorCreateResponse.Block | null;

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
  metadata: AuthorCreateResponse.Metadata;

  metrics: AuthorCreateResponse.Metrics;

  /**
   * Risk assessment details, if available.
   */
  risk_evaluation: AuthorCreateResponse.RiskEvaluation | null;

  /**
   * Current author status
   */
  status: 'enabled' | 'suspended' | 'blocked';

  trust_level: AuthorCreateResponse.TrustLevel;

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

export namespace AuthorCreateResponse {
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

export interface AuthorRetrieveResponse {
  /**
   * Author ID in Moderation API
   */
  id: string;

  /**
   * Block or suspension details, if applicable. Null if the author is enabled.
   */
  block: AuthorRetrieveResponse.Block | null;

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
  metadata: AuthorRetrieveResponse.Metadata;

  metrics: AuthorRetrieveResponse.Metrics;

  /**
   * Risk assessment details, if available.
   */
  risk_evaluation: AuthorRetrieveResponse.RiskEvaluation | null;

  /**
   * Current author status
   */
  status: 'enabled' | 'suspended' | 'blocked';

  trust_level: AuthorRetrieveResponse.TrustLevel;

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

export namespace AuthorRetrieveResponse {
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

export interface AuthorUpdateResponse {
  /**
   * Author ID in Moderation API
   */
  id: string;

  /**
   * Block or suspension details, if applicable. Null if the author is enabled.
   */
  block: AuthorUpdateResponse.Block | null;

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
  metadata: AuthorUpdateResponse.Metadata;

  metrics: AuthorUpdateResponse.Metrics;

  /**
   * Risk assessment details, if available.
   */
  risk_evaluation: AuthorUpdateResponse.RiskEvaluation | null;

  /**
   * Current author status
   */
  status: 'enabled' | 'suspended' | 'blocked';

  trust_level: AuthorUpdateResponse.TrustLevel;

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

export namespace AuthorUpdateResponse {
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

export interface AuthorListResponse {
  authors: Array<AuthorListResponse.Author>;

  pagination: AuthorListResponse.Pagination;
}

export namespace AuthorListResponse {
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

  export interface Pagination {
    hasNextPage: boolean;

    hasPreviousPage: boolean;

    pageNumber: number;

    pageSize: number;

    total: number;
  }
}

export interface AuthorDeleteResponse {
  success: boolean;
}

export interface AuthorCreateParams {
  /**
   * External ID of the user, typically the ID of the author in your database.
   */
  external_id: string;

  /**
   * Author email address
   */
  email?: string | null;

  /**
   * URL of the author's external profile
   */
  external_link?: string | null;

  /**
   * Timestamp when author first appeared
   */
  first_seen?: number;

  /**
   * Timestamp of last activity
   */
  last_seen?: number;

  manual_trust_level?: number | null;

  /**
   * Additional metadata provided by your system. We recommend including any relevant
   * information that may assist in the moderation process.
   */
  metadata?: AuthorCreateParams.Metadata;

  /**
   * Author name or identifier
   */
  name?: string | null;

  /**
   * URL of the author's profile picture
   */
  profile_picture?: string | null;
}

export namespace AuthorCreateParams {
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
}

export interface AuthorUpdateParams {
  /**
   * Author email address
   */
  email?: string | null;

  /**
   * URL of the author's external profile
   */
  external_link?: string | null;

  /**
   * Timestamp when author first appeared
   */
  first_seen?: number;

  /**
   * Timestamp of last activity
   */
  last_seen?: number;

  manual_trust_level?: number | null;

  /**
   * Additional metadata provided by your system. We recommend including any relevant
   * information that may assist in the moderation process.
   */
  metadata?: AuthorUpdateParams.Metadata;

  /**
   * Author name or identifier
   */
  name?: string | null;

  /**
   * URL of the author's profile picture
   */
  profile_picture?: string | null;
}

export namespace AuthorUpdateParams {
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
}

export interface AuthorListParams {
  contentTypes?: string;

  lastActiveDate?: string;

  memberSinceDate?: string;

  /**
   * Page number to fetch
   */
  pageNumber?: number;

  /**
   * Number of authors per page
   */
  pageSize?: number;

  sortBy?:
    | 'trustLevel'
    | 'violationCount'
    | 'reportCount'
    | 'memberSince'
    | 'lastActive'
    | 'contentCount'
    | 'flaggedContentRatio'
    | 'averageSentiment';

  /**
   * Sort direction
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace Authors {
  export {
    type AuthorCreateResponse as AuthorCreateResponse,
    type AuthorRetrieveResponse as AuthorRetrieveResponse,
    type AuthorUpdateResponse as AuthorUpdateResponse,
    type AuthorListResponse as AuthorListResponse,
    type AuthorDeleteResponse as AuthorDeleteResponse,
    type AuthorCreateParams as AuthorCreateParams,
    type AuthorUpdateParams as AuthorUpdateParams,
    type AuthorListParams as AuthorListParams,
  };
}
