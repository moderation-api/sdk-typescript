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
