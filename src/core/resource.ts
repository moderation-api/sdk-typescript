// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ModerationAPI } from '../client';

export abstract class APIResource {
  protected _client: ModerationAPI;

  constructor(client: ModerationAPI) {
    this._client = client;
  }
}
