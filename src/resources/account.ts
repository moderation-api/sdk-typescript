// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Get account details
   */
  list(options?: RequestOptions): APIPromise<AccountListResponse> {
    return this._client.get('/account', options);
  }
}

export interface AccountListResponse {
  /**
   * ID of the account
   */
  id: string;

  /**
   * Name of the paid plan
   */
  paid_plan_name: string;

  /**
   * Remaining quota
   */
  remaining_quota: number;

  /**
   * Text API quota
   */
  text_api_quota: number;

  current_project?: AccountListResponse.CurrentProject;
}

export namespace AccountListResponse {
  export interface CurrentProject {
    /**
     * ID of the current project
     */
    id: string;

    /**
     * Name of the current project
     */
    name: string;
  }
}

export declare namespace Account {
  export { type AccountListResponse as AccountListResponse };
}
