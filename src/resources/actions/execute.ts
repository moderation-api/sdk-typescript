// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Execute extends APIResource {
  /**
   * Execute a moderation action on one or more content items.
   */
  execute(body: ExecuteExecuteParams, options?: RequestOptions): APIPromise<ExecuteExecuteResponse> {
    return this._client.post('/actions/execute', { body, ...options });
  }

  /**
   * Execute an action on a set of content items in a queue.
   *
   * @deprecated
   */
  executeByID(
    actionID: string,
    body: ExecuteExecuteByIDParams,
    options?: RequestOptions,
  ): APIPromise<ExecuteExecuteByIDResponse> {
    return this._client.post(path`/actions/${actionID}/execute`, { body, ...options });
  }
}

/**
 * Execution result
 */
export interface ExecuteExecuteResponse {
  /**
   * Whether the action was executed successfully
   */
  success: boolean;
}

export interface ExecuteExecuteByIDResponse {
  /**
   * The ID of the action.
   */
  actionId: string;

  /**
   * The IDs of the content items.
   */
  ids: Array<string>;

  /**
   * Action executed successfully.
   */
  success: boolean;
}

export interface ExecuteExecuteParams {
  /**
   * ID or key of the action to execute
   */
  actionKey: string;

  /**
   * IDs of the authors to apply the action to. Provide this or contentIds.
   */
  authorIds?: Array<string>;

  /**
   * IDs of the content items to apply the action to. Provide this or authorIds.
   */
  contentIds?: Array<string>;

  /**
   * Optional duration in milliseconds for actions with timeouts
   */
  duration?: number;

  /**
   * Optional queue ID if the action is queue-specific
   */
  queueId?: string;

  /**
   * Optional value to provide with the action
   */
  value?: string;
}

export interface ExecuteExecuteByIDParams {
  /**
   * IDs of the authors to apply the action to
   */
  authorIds?: Array<string>;

  /**
   * The IDs of the content items to perform the action on.
   */
  contentIds?: Array<string>;

  /**
   * The ID of the queue the action was performed from if any.
   */
  queueId?: string;

  /**
   * The value of the action. Useful to set a reason for the action etc.
   */
  value?: string;
}

export declare namespace Execute {
  export {
    type ExecuteExecuteResponse as ExecuteExecuteResponse,
    type ExecuteExecuteByIDResponse as ExecuteExecuteByIDResponse,
    type ExecuteExecuteParams as ExecuteExecuteParams,
    type ExecuteExecuteByIDParams as ExecuteExecuteByIDParams,
  };
}
