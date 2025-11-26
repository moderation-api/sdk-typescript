// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Words extends APIResource {
  /**
   * Add words to an existing wordlist
   */
  add(id: string, body: WordAddParams, options?: RequestOptions): APIPromise<WordAddResponse> {
    return this._client.post(path`/wordlist/${id}/words`, { body, ...options });
  }

  /**
   * Remove words from an existing wordlist
   */
  remove(id: string, params: WordRemoveParams, options?: RequestOptions): APIPromise<WordRemoveResponse> {
    const { words } = params;
    return this._client.delete(path`/wordlist/${id}/words`, { query: { words }, ...options });
  }
}

export interface WordAddResponse {
  /**
   * Number of words added
   */
  addedCount: number;

  /**
   * List of words that were added
   */
  addedWords: Array<string>;

  /**
   * Total number of words in wordlist
   */
  totalCount: number;
}

export interface WordRemoveResponse {
  /**
   * Number of words removed
   */
  removedCount: number;

  /**
   * List of words removed
   */
  removedWords: Array<string>;

  /**
   * Total number of words in wordlist
   */
  totalCount: number;
}

export interface WordAddParams {
  /**
   * Array of words to add to the wordlist. Duplicate words will be ignored.
   */
  words: Array<string>;
}

export interface WordRemoveParams {
  /**
   * Array of words to remove from the wordlist
   */
  words: Array<string>;
}

export declare namespace Words {
  export {
    type WordAddResponse as WordAddResponse,
    type WordRemoveResponse as WordRemoveResponse,
    type WordAddParams as WordAddParams,
    type WordRemoveParams as WordRemoveParams,
  };
}
