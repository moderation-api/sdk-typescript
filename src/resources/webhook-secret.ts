// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WebhookSecret extends APIResource {
  /**
   * Get the signing secret used to sign webhook deliveries for this project,
   * creating one if none exists yet. Verify deliveries by comparing the
   * `modapi-signature` header to HMAC-SHA256(raw request body, secret) hex-encoded.
   */
  retrieve(options?: RequestOptions): APIPromise<WebhookSecretRetrieveResponse> {
    return this._client.get('/webhook-secret', options);
  }
}

export interface WebhookSecretRetrieveResponse {
  /**
   * The signing secret for this project. Every webhook delivery is signed with
   * HMAC-SHA256 over the raw JSON body, hex-encoded in the `modapi-signature`
   * header.
   */
  secret: string;
}

export declare namespace WebhookSecret {
  export { type WebhookSecretRetrieveResponse as WebhookSecretRetrieveResponse };
}
