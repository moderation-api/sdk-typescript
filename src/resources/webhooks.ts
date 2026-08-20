// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create a webhook subscribed to one or more event types. Deliveries use the v2
   * envelope and are signed with the project signing secret (see the signing secret
   * endpoint).
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Get a webhook by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/webhooks/${id}`, options);
  }

  /**
   * Update a webhook. Legacy v1 webhooks are read-only: delete them and create a new
   * webhook instead.
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookUpdateResponse> {
    return this._client.put(path`/webhooks/${id}`, { body, ...options });
  }

  /**
   * List all webhooks for the authenticated project.
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', options);
  }

  /**
   * Delete a webhook.
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/webhooks/${id}`, options);
  }
}

export interface WebhookCreateResponse {
  /**
   * The ID of the webhook.
   */
  id: string;

  /**
   * The date the webhook was created.
   */
  createdAt: string;

  /**
   * Event types this webhook subscribes to. Empty for legacy v1 webhooks, which
   * subscribe via their single deprecated `type` instead.
   */
  eventTypes: Array<
    | 'QUEUE_ITEM_NEW'
    | 'QUEUE_ITEM_COMPLETED'
    | 'QUEUE_ITEM_ACTION'
    | 'QUEUE_ITEM_REJECTED'
    | 'QUEUE_ITEM_ALLOWED'
    | 'AUTHOR_BLOCKED'
    | 'AUTHOR_UNBLOCKED'
    | 'AUTHOR_SUSPENDED'
    | 'AUTHOR_UPDATED'
    | 'AUTHOR_TRUST_LEVEL_CHANGED'
    | 'AUTHOR_ACTION'
  >;

  /**
   * The webhook's name.
   */
  name: string;

  /**
   * Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat
   * shape and is read-only via this API.
   */
  payloadVersion: 'V1' | 'V2';

  /**
   * The URL we call when a subscribed event occurs.
   */
  url: string;

  /**
   * The webhook's description.
   */
  description?: string | null;
}

export interface WebhookRetrieveResponse {
  /**
   * The ID of the webhook.
   */
  id: string;

  /**
   * The date the webhook was created.
   */
  createdAt: string;

  /**
   * Event types this webhook subscribes to. Empty for legacy v1 webhooks, which
   * subscribe via their single deprecated `type` instead.
   */
  eventTypes: Array<
    | 'QUEUE_ITEM_NEW'
    | 'QUEUE_ITEM_COMPLETED'
    | 'QUEUE_ITEM_ACTION'
    | 'QUEUE_ITEM_REJECTED'
    | 'QUEUE_ITEM_ALLOWED'
    | 'AUTHOR_BLOCKED'
    | 'AUTHOR_UNBLOCKED'
    | 'AUTHOR_SUSPENDED'
    | 'AUTHOR_UPDATED'
    | 'AUTHOR_TRUST_LEVEL_CHANGED'
    | 'AUTHOR_ACTION'
  >;

  /**
   * The webhook's name.
   */
  name: string;

  /**
   * Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat
   * shape and is read-only via this API.
   */
  payloadVersion: 'V1' | 'V2';

  /**
   * The URL we call when a subscribed event occurs.
   */
  url: string;

  /**
   * The webhook's description.
   */
  description?: string | null;
}

export interface WebhookUpdateResponse {
  /**
   * The ID of the webhook.
   */
  id: string;

  /**
   * The date the webhook was created.
   */
  createdAt: string;

  /**
   * Event types this webhook subscribes to. Empty for legacy v1 webhooks, which
   * subscribe via their single deprecated `type` instead.
   */
  eventTypes: Array<
    | 'QUEUE_ITEM_NEW'
    | 'QUEUE_ITEM_COMPLETED'
    | 'QUEUE_ITEM_ACTION'
    | 'QUEUE_ITEM_REJECTED'
    | 'QUEUE_ITEM_ALLOWED'
    | 'AUTHOR_BLOCKED'
    | 'AUTHOR_UNBLOCKED'
    | 'AUTHOR_SUSPENDED'
    | 'AUTHOR_UPDATED'
    | 'AUTHOR_TRUST_LEVEL_CHANGED'
    | 'AUTHOR_ACTION'
  >;

  /**
   * The webhook's name.
   */
  name: string;

  /**
   * Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat
   * shape and is read-only via this API.
   */
  payloadVersion: 'V1' | 'V2';

  /**
   * The URL we call when a subscribed event occurs.
   */
  url: string;

  /**
   * The webhook's description.
   */
  description?: string | null;
}

export type WebhookListResponse = Array<WebhookListResponse.WebhookListResponseItem>;

export namespace WebhookListResponse {
  export interface WebhookListResponseItem {
    /**
     * The ID of the webhook.
     */
    id: string;

    /**
     * The date the webhook was created.
     */
    createdAt: string;

    /**
     * Event types this webhook subscribes to. Empty for legacy v1 webhooks, which
     * subscribe via their single deprecated `type` instead.
     */
    eventTypes: Array<
      | 'QUEUE_ITEM_NEW'
      | 'QUEUE_ITEM_COMPLETED'
      | 'QUEUE_ITEM_ACTION'
      | 'QUEUE_ITEM_REJECTED'
      | 'QUEUE_ITEM_ALLOWED'
      | 'AUTHOR_BLOCKED'
      | 'AUTHOR_UNBLOCKED'
      | 'AUTHOR_SUSPENDED'
      | 'AUTHOR_UPDATED'
      | 'AUTHOR_TRUST_LEVEL_CHANGED'
      | 'AUTHOR_ACTION'
    >;

    /**
     * The webhook's name.
     */
    name: string;

    /**
     * Payload envelope version. V2 is the Stripe-style envelope; V1 is the legacy flat
     * shape and is read-only via this API.
     */
    payloadVersion: 'V1' | 'V2';

    /**
     * The URL we call when a subscribed event occurs.
     */
    url: string;

    /**
     * The webhook's description.
     */
    description?: string | null;
  }
}

export interface WebhookDeleteResponse {
  /**
   * The ID of the webhook.
   */
  id: string;

  /**
   * Whether the webhook was deleted.
   */
  deleted: boolean;
}

export interface WebhookCreateParams {
  /**
   * Event types this webhook subscribes to. One webhook URL receives all events you
   * list here.
   */
  eventTypes: Array<
    | 'QUEUE_ITEM_NEW'
    | 'QUEUE_ITEM_COMPLETED'
    | 'QUEUE_ITEM_ACTION'
    | 'QUEUE_ITEM_REJECTED'
    | 'QUEUE_ITEM_ALLOWED'
    | 'AUTHOR_BLOCKED'
    | 'AUTHOR_UNBLOCKED'
    | 'AUTHOR_SUSPENDED'
    | 'AUTHOR_UPDATED'
    | 'AUTHOR_TRUST_LEVEL_CHANGED'
    | 'AUTHOR_ACTION'
  >;

  /**
   * The webhook's name, used to identify it in the dashboard
   */
  name: string;

  /**
   * The webhook's URL. We'll call this URL when an event occurs.
   */
  url: string;

  /**
   * The webhook's description
   */
  description?: string | null;
}

export interface WebhookUpdateParams {
  /**
   * The webhook's description
   */
  description?: string | null;

  /**
   * Event types this webhook subscribes to. One webhook URL receives all events you
   * list here.
   */
  eventTypes?: Array<
    | 'QUEUE_ITEM_NEW'
    | 'QUEUE_ITEM_COMPLETED'
    | 'QUEUE_ITEM_ACTION'
    | 'QUEUE_ITEM_REJECTED'
    | 'QUEUE_ITEM_ALLOWED'
    | 'AUTHOR_BLOCKED'
    | 'AUTHOR_UNBLOCKED'
    | 'AUTHOR_SUSPENDED'
    | 'AUTHOR_UPDATED'
    | 'AUTHOR_TRUST_LEVEL_CHANGED'
    | 'AUTHOR_ACTION'
  >;

  /**
   * The webhook's name, used to identify it in the dashboard
   */
  name?: string;

  /**
   * The webhook's URL. We'll call this URL when an event occurs.
   */
  url?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
