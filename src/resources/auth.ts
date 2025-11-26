// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * @deprecated
   */
  create(body: AuthCreateParams, options?: RequestOptions): APIPromise<AuthCreateResponse> {
    return this._client.post('/auth', { body, ...options });
  }

  /**
   * @deprecated
   */
  retrieve(options?: RequestOptions): APIPromise<AuthRetrieveResponse> {
    return this._client.get('/auth', options);
  }
}

export interface AuthCreateResponse {
  /**
   * Message of the authentication
   */
  message: string;

  /**
   * Name of the authenticated project
   */
  project: string;

  /**
   * Status of the authentication
   */
  status: string;
}

export interface AuthRetrieveResponse {
  /**
   * Message of the authentication
   */
  message: string;

  /**
   * Status of the authentication
   */
  status: string;
}

export interface AuthCreateParams {}

export declare namespace Auth {
  export {
    type AuthCreateResponse as AuthCreateResponse,
    type AuthRetrieveResponse as AuthRetrieveResponse,
    type AuthCreateParams as AuthCreateParams,
  };
}
