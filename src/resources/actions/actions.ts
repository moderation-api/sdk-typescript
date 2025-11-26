// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecuteAPI from './execute';
import {
  Execute,
  ExecuteExecuteByIDParams,
  ExecuteExecuteByIDResponse,
  ExecuteExecuteParams,
  ExecuteExecuteResponse,
} from './execute';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  execute: ExecuteAPI.Execute = new ExecuteAPI.Execute(this._client);

  /**
   * Create an action.
   */
  create(body: ActionCreateParams, options?: RequestOptions): APIPromise<ActionCreateResponse> {
    return this._client.post('/actions', { body, ...options });
  }

  /**
   * Get an action by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/actions/${id}`, options);
  }

  /**
   * Update an action.
   */
  update(id: string, body: ActionUpdateParams, options?: RequestOptions): APIPromise<ActionUpdateResponse> {
    return this._client.put(path`/actions/${id}`, { body, ...options });
  }

  /**
   * List all available moderation actions for the authenticated organization.
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
  }

  /**
   * Delete an action and all of its webhooks.
   */
  delete(id: string, options?: RequestOptions): APIPromise<ActionDeleteResponse> {
    return this._client.delete(path`/actions/${id}`, options);
  }
}

export interface ActionCreateResponse {
  /**
   * The ID of the action.
   */
  id: string;

  /**
   * Whether the action is a built-in action or a custom one.
   */
  builtIn: boolean | null;

  /**
   * The date the action was created.
   */
  createdAt: string;

  /**
   * The IDs of the queues the action is available in.
   */
  filterInQueueIds: Array<string>;

  /**
   * Whether the action allows any text to be entered as a value or if it must be one
   * of the possible values.
   */
  freeText: boolean;

  /**
   * The name of the action.
   */
  name: string;

  /**
   * Show the action in all queues, selected queues or no queues (to use via API
   * only).
   */
  position: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

  /**
   * The possible values of the action. The user will be prompted to select one of
   * these values when executing the action.
   */
  possibleValues: Array<ActionCreateResponse.PossibleValue>;

  /**
   * Whether the action resolves and removes the item, unresolves and re-add it to
   * the queue, or does not change the resolve status.
   */
  queueBehaviour: 'REMOVE' | 'ADD' | 'NO_CHANGE';

  /**
   * Whether the action requires a value to be executed.
   */
  valueRequired: boolean;

  /**
   * The description of the action.
   */
  description?: string | null;

  /**
   * User defined key of the action.
   */
  key?: string | null;

  /**
   * The type of the action.
   */
  type?:
    | 'AUTHOR_BLOCK'
    | 'AUTHOR_BLOCK_TEMP'
    | 'AUTHOR_UNBLOCK'
    | 'AUTHOR_DELETE'
    | 'AUTHOR_REPORT'
    | 'AUTHOR_WARN'
    | 'AUTHOR_CUSTOM'
    | 'ITEM_CUSTOM'
    | null;
}

export namespace ActionCreateResponse {
  export interface PossibleValue {
    /**
     * The value of the action.
     */
    value: string;
  }
}

export interface ActionRetrieveResponse {
  /**
   * The ID of the action.
   */
  id: string;

  /**
   * Whether the action is a built-in action or a custom one.
   */
  builtIn: boolean | null;

  /**
   * The date the action was created.
   */
  createdAt: string;

  /**
   * The IDs of the queues the action is available in.
   */
  filterInQueueIds: Array<string>;

  /**
   * Whether the action allows any text to be entered as a value or if it must be one
   * of the possible values.
   */
  freeText: boolean;

  /**
   * The name of the action.
   */
  name: string;

  /**
   * Show the action in all queues, selected queues or no queues (to use via API
   * only).
   */
  position: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

  /**
   * The possible values of the action. The user will be prompted to select one of
   * these values when executing the action.
   */
  possibleValues: Array<ActionRetrieveResponse.PossibleValue>;

  /**
   * Whether the action resolves and removes the item, unresolves and re-add it to
   * the queue, or does not change the resolve status.
   */
  queueBehaviour: 'REMOVE' | 'ADD' | 'NO_CHANGE';

  /**
   * Whether the action requires a value to be executed.
   */
  valueRequired: boolean;

  /**
   * The action's webhooks.
   */
  webhooks: Array<ActionRetrieveResponse.Webhook>;

  /**
   * The description of the action.
   */
  description?: string | null;

  /**
   * User defined key of the action.
   */
  key?: string | null;

  /**
   * The type of the action.
   */
  type?:
    | 'AUTHOR_BLOCK'
    | 'AUTHOR_BLOCK_TEMP'
    | 'AUTHOR_UNBLOCK'
    | 'AUTHOR_DELETE'
    | 'AUTHOR_REPORT'
    | 'AUTHOR_WARN'
    | 'AUTHOR_CUSTOM'
    | 'ITEM_CUSTOM'
    | null;
}

export namespace ActionRetrieveResponse {
  export interface PossibleValue {
    /**
     * The value of the action.
     */
    value: string;
  }

  export interface Webhook {
    /**
     * The ID of the webhook.
     */
    id: string;

    /**
     * The webhook's name, used to identify it in the dashboard
     */
    name: string;

    /**
     * The webhook's URL. We'll call this URL when the event occurs.
     */
    url: string;

    /**
     * The webhook's description
     */
    description?: string | null;

    /**
     * The ID of the moderation action to trigger the webhook on. Only used for
     * moderation action webhooks.
     */
    moderationActionId?: string | null;
  }
}

export interface ActionUpdateResponse {
  /**
   * The ID of the action.
   */
  id: string;

  /**
   * Whether the action is a built-in action or a custom one.
   */
  builtIn: boolean | null;

  /**
   * The date the action was created.
   */
  createdAt: string;

  /**
   * The IDs of the queues the action is available in.
   */
  filterInQueueIds: Array<string>;

  /**
   * Whether the action allows any text to be entered as a value or if it must be one
   * of the possible values.
   */
  freeText: boolean;

  /**
   * The name of the action.
   */
  name: string;

  /**
   * Show the action in all queues, selected queues or no queues (to use via API
   * only).
   */
  position: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

  /**
   * The possible values of the action. The user will be prompted to select one of
   * these values when executing the action.
   */
  possibleValues: Array<ActionUpdateResponse.PossibleValue>;

  /**
   * Whether the action resolves and removes the item, unresolves and re-add it to
   * the queue, or does not change the resolve status.
   */
  queueBehaviour: 'REMOVE' | 'ADD' | 'NO_CHANGE';

  /**
   * Whether the action requires a value to be executed.
   */
  valueRequired: boolean;

  /**
   * The description of the action.
   */
  description?: string | null;

  /**
   * User defined key of the action.
   */
  key?: string | null;

  /**
   * The type of the action.
   */
  type?:
    | 'AUTHOR_BLOCK'
    | 'AUTHOR_BLOCK_TEMP'
    | 'AUTHOR_UNBLOCK'
    | 'AUTHOR_DELETE'
    | 'AUTHOR_REPORT'
    | 'AUTHOR_WARN'
    | 'AUTHOR_CUSTOM'
    | 'ITEM_CUSTOM'
    | null;
}

export namespace ActionUpdateResponse {
  export interface PossibleValue {
    /**
     * The value of the action.
     */
    value: string;
  }
}

/**
 * List of moderation actions with their associated webhooks
 */
export type ActionListResponse = Array<ActionListResponse.ActionListResponseItem>;

export namespace ActionListResponse {
  export interface ActionListResponseItem {
    /**
     * The ID of the action.
     */
    id: string;

    /**
     * Whether the action is a built-in action or a custom one.
     */
    builtIn: boolean | null;

    /**
     * The date the action was created.
     */
    createdAt: string;

    /**
     * The IDs of the queues the action is available in.
     */
    filterInQueueIds: Array<string>;

    /**
     * Whether the action allows any text to be entered as a value or if it must be one
     * of the possible values.
     */
    freeText: boolean;

    /**
     * The name of the action.
     */
    name: string;

    /**
     * Show the action in all queues, selected queues or no queues (to use via API
     * only).
     */
    position: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

    /**
     * The possible values of the action. The user will be prompted to select one of
     * these values when executing the action.
     */
    possibleValues: Array<ActionListResponseItem.PossibleValue>;

    /**
     * Whether the action resolves and removes the item, unresolves and re-add it to
     * the queue, or does not change the resolve status.
     */
    queueBehaviour: 'REMOVE' | 'ADD' | 'NO_CHANGE';

    /**
     * Whether the action requires a value to be executed.
     */
    valueRequired: boolean;

    /**
     * The action's webhooks.
     */
    webhooks: Array<ActionListResponseItem.Webhook>;

    /**
     * The description of the action.
     */
    description?: string | null;

    /**
     * User defined key of the action.
     */
    key?: string | null;

    /**
     * The type of the action.
     */
    type?:
      | 'AUTHOR_BLOCK'
      | 'AUTHOR_BLOCK_TEMP'
      | 'AUTHOR_UNBLOCK'
      | 'AUTHOR_DELETE'
      | 'AUTHOR_REPORT'
      | 'AUTHOR_WARN'
      | 'AUTHOR_CUSTOM'
      | 'ITEM_CUSTOM'
      | null;
  }

  export namespace ActionListResponseItem {
    export interface PossibleValue {
      /**
       * The value of the action.
       */
      value: string;
    }

    export interface Webhook {
      /**
       * The ID of the webhook.
       */
      id: string;

      /**
       * The webhook's name, used to identify it in the dashboard
       */
      name: string;

      /**
       * The webhook's URL. We'll call this URL when the event occurs.
       */
      url: string;

      /**
       * The webhook's description
       */
      description?: string | null;

      /**
       * The ID of the moderation action to trigger the webhook on. Only used for
       * moderation action webhooks.
       */
      moderationActionId?: string | null;
    }
  }
}

export interface ActionDeleteResponse {
  /**
   * The ID of the action.
   */
  id: string;

  /**
   * Whether the action was deleted.
   */
  deleted: boolean;
}

export interface ActionCreateParams {
  /**
   * The name of the action.
   */
  name: string;

  /**
   * Whether the action is a built-in action or a custom one.
   */
  builtIn?: boolean | null;

  /**
   * The description of the action.
   */
  description?: string | null;

  /**
   * The IDs of the queues the action is available in.
   */
  filterInQueueIds?: Array<string>;

  /**
   * Whether the action allows any text to be entered as a value or if it must be one
   * of the possible values.
   */
  freeText?: boolean;

  /**
   * User defined key of the action.
   */
  key?: string | null;

  /**
   * Show the action in all queues, selected queues or no queues (to use via API
   * only).
   */
  position?: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

  /**
   * The possible values of the action. The user will be prompted to select one of
   * these values when executing the action.
   */
  possibleValues?: Array<ActionCreateParams.PossibleValue>;

  /**
   * Whether the action resolves and removes the item, unresolves and re-add it to
   * the queue, or does not change the resolve status.
   */
  queueBehaviour?: 'REMOVE' | 'ADD' | 'NO_CHANGE';

  /**
   * The type of the action.
   */
  type?:
    | 'AUTHOR_BLOCK'
    | 'AUTHOR_BLOCK_TEMP'
    | 'AUTHOR_UNBLOCK'
    | 'AUTHOR_DELETE'
    | 'AUTHOR_REPORT'
    | 'AUTHOR_WARN'
    | 'AUTHOR_CUSTOM'
    | 'ITEM_CUSTOM'
    | null;

  /**
   * Whether the action requires a value to be executed.
   */
  valueRequired?: boolean;

  /**
   * The action's webhooks.
   */
  webhooks?: Array<ActionCreateParams.Webhook>;
}

export namespace ActionCreateParams {
  export interface PossibleValue {
    /**
     * The value of the action.
     */
    value: string;
  }

  export interface Webhook {
    /**
     * The webhook's name, used to identify it in the dashboard
     */
    name: string;

    /**
     * The webhook's URL. We'll call this URL when the event occurs.
     */
    url: string;

    /**
     * ID of an existing webhook or undefined if this is a new webhook.
     */
    id?: string;

    /**
     * The webhook's description
     */
    description?: string | null;
  }
}

export interface ActionUpdateParams {
  /**
   * Whether the action is a built-in action or a custom one.
   */
  builtIn?: boolean | null;

  /**
   * The description of the action.
   */
  description?: string | null;

  /**
   * The IDs of the queues the action is available in.
   */
  filterInQueueIds?: Array<string>;

  /**
   * Whether the action allows any text to be entered as a value or if it must be one
   * of the possible values.
   */
  freeText?: boolean;

  /**
   * User defined key of the action.
   */
  key?: string | null;

  /**
   * The name of the action.
   */
  name?: string;

  /**
   * Show the action in all queues, selected queues or no queues (to use via API
   * only).
   */
  position?: 'ALL_QUEUES' | 'SOME_QUEUES' | 'HIDDEN';

  /**
   * The possible values of the action. The user will be prompted to select one of
   * these values when executing the action.
   */
  possibleValues?: Array<ActionUpdateParams.PossibleValue>;

  /**
   * Whether the action resolves and removes the item, unresolves and re-add it to
   * the queue, or does not change the resolve status.
   */
  queueBehaviour?: 'REMOVE' | 'ADD' | 'NO_CHANGE';

  /**
   * The type of the action.
   */
  type?:
    | 'AUTHOR_BLOCK'
    | 'AUTHOR_BLOCK_TEMP'
    | 'AUTHOR_UNBLOCK'
    | 'AUTHOR_DELETE'
    | 'AUTHOR_REPORT'
    | 'AUTHOR_WARN'
    | 'AUTHOR_CUSTOM'
    | 'ITEM_CUSTOM'
    | null;

  /**
   * Whether the action requires a value to be executed.
   */
  valueRequired?: boolean;

  /**
   * The action's webhooks.
   */
  webhooks?: Array<ActionUpdateParams.Webhook>;
}

export namespace ActionUpdateParams {
  export interface PossibleValue {
    /**
     * The value of the action.
     */
    value: string;
  }

  export interface Webhook {
    /**
     * The webhook's name, used to identify it in the dashboard
     */
    name: string;

    /**
     * The webhook's URL. We'll call this URL when the event occurs.
     */
    url: string;

    /**
     * ID of an existing webhook or undefined if this is a new webhook.
     */
    id?: string;

    /**
     * The webhook's description
     */
    description?: string | null;
  }
}

export interface ActionListParams {
  queueId?: string;
}

Actions.Execute = Execute;

export declare namespace Actions {
  export {
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionUpdateResponse as ActionUpdateResponse,
    type ActionListResponse as ActionListResponse,
    type ActionDeleteResponse as ActionDeleteResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionListParams as ActionListParams,
  };

  export {
    Execute as Execute,
    type ExecuteExecuteResponse as ExecuteExecuteResponse,
    type ExecuteExecuteByIDResponse as ExecuteExecuteByIDResponse,
    type ExecuteExecuteParams as ExecuteExecuteParams,
    type ExecuteExecuteByIDParams as ExecuteExecuteByIDParams,
  };
}
