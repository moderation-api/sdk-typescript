// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Get paginated list of items in a moderation queue with filtering options
   */
  list(
    id: string,
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemListResponse> {
    return this._client.get(path`/queue/${id}/items`, { query, ...options });
  }

  /**
   * Mark a queue item as resolved with a specific moderation action
   */
  resolve(
    itemID: string,
    params: ItemResolveParams,
    options?: RequestOptions,
  ): APIPromise<ItemResolveResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/queue/${id}/items/${itemID}/resolve`, { body, ...options });
  }

  /**
   * Mark a previously resolved queue item as unresolved/pending
   */
  unresolve(
    itemID: string,
    params: ItemUnresolveParams,
    options?: RequestOptions,
  ): APIPromise<ItemUnresolveResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/queue/${id}/items/${itemID}/unresolve`, { body, ...options });
  }
}

export interface ItemListResponse {
  items: Array<ItemListResponse.Item>;

  pagination: ItemListResponse.Pagination;
}

export namespace ItemListResponse {
  export interface Item {
    /**
     * Content ID
     */
    id: string;

    /**
     * The content to be moderated
     */
    content: string;

    /**
     * Whether the item is flagged by any label
     */
    flagged: boolean;

    labels: Array<Item.Label>;

    /**
     * Status of the item
     */
    status: 'pending' | 'resolved';

    /**
     * Unix timestamp of when the item was created
     */
    timestamp: number;

    /**
     * Action IDs taken on this item
     */
    actions?: Array<Item.Action>;

    /**
     * Author ID
     */
    authorId?: string;

    /**
     * Type of the content object
     */
    contentType?: string;

    /**
     * Conversation ID
     */
    conversationId?: string;

    /**
     * Content language
     */
    language?: string;
  }

  export namespace Item {
    export interface Label {
      /**
       * Whether this label caused a flag
       */
      flagged: boolean;

      /**
       * Label name
       */
      label: string;

      /**
       * Confidence score of the label
       */
      score: number;
    }

    export interface Action {
      /**
       * Action ID
       */
      id: string;

      /**
       * Action name
       */
      name: string;

      /**
       * Unix timestamp of when the action was taken
       */
      timestamp: number;

      /**
       * Action comment
       */
      comment?: string;

      /**
       * Moderator userID
       */
      reviewer?: string;
    }
  }

  export interface Pagination {
    currentPage: number;

    hasNextPage: boolean;

    hasPreviousPage: boolean;

    totalItems: number;

    totalPages: number;
  }
}

export interface ItemResolveResponse {
  /**
   * Timestamp when the item was resolved
   */
  resolvedAt: string;

  success: boolean;

  /**
   * Optional comment
   */
  comment?: string;
}

export interface ItemUnresolveResponse {
  /**
   * New status of the item
   */
  status: string;

  success: boolean;

  /**
   * Timestamp when the item was unresolved
   */
  unresolvedAt: string;
}

export interface ItemListParams {
  afterDate?: string;

  authorId?: string;

  beforeDate?: string;

  conversationIds?: string;

  filteredActionIds?: string;

  includeResolved?: string;

  labels?: string;

  /**
   * Page number to fetch
   */
  pageNumber?: string;

  /**
   * Number of items per page
   */
  pageSize?: string;

  /**
   * Sort direction
   */
  sortDirection?: 'asc' | 'desc';

  sortField?: 'createdAt' | 'severity' | 'reviewedAt';
}

export interface ItemResolveParams {
  /**
   * Path param: The queue ID
   */
  id: string;

  /**
   * Body param: Optional comment
   */
  comment?: string;
}

export interface ItemUnresolveParams {
  /**
   * Path param: The queue ID
   */
  id: string;

  /**
   * Body param: Optional reason for unresolving the item
   */
  comment?: string;
}

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemResolveResponse as ItemResolveResponse,
    type ItemUnresolveResponse as ItemUnresolveResponse,
    type ItemListParams as ItemListParams,
    type ItemResolveParams as ItemResolveParams,
    type ItemUnresolveParams as ItemUnresolveParams,
  };
}
