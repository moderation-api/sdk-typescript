// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WordsAPI from './words';
import { WordAddParams, WordAddResponse, WordRemoveParams, WordRemoveResponse, Words } from './words';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wordlist extends APIResource {
  words: WordsAPI.Words = new WordsAPI.Words(this._client);

  /**
   * Get a specific wordlist by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WordlistRetrieveResponse> {
    return this._client.get(path`/wordlist/${id}`, options);
  }

  /**
   * Update a wordlist
   */
  update(
    id: string,
    body: WordlistUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WordlistUpdateResponse> {
    return this._client.put(path`/wordlist/${id}`, { body, ...options });
  }

  /**
   * List all wordlists for the authenticated organization
   */
  list(options?: RequestOptions): APIPromise<WordlistListResponse> {
    return this._client.get('/wordlist', options);
  }

  /**
   * Get the current embedding progress status for a wordlist
   */
  getEmbeddingStatus(id: string, options?: RequestOptions): APIPromise<WordlistGetEmbeddingStatusResponse> {
    return this._client.get(path`/wordlist/${id}/embedding-status`, options);
  }
}

export interface WordlistRetrieveResponse {
  /**
   * ID of the wordlist
   */
  id: string;

  /**
   * Creation date of the wordlist
   */
  createdAt: string;

  /**
   * Name of the wordlist
   */
  name: string | null;

  /**
   * ID of the organization
   */
  organizationId: string;

  /**
   * Strict mode
   */
  strict: boolean;

  /**
   * ID of the user
   */
  userId: string | null;

  /**
   * Words in the wordlist
   */
  words: Array<string>;
}

export interface WordlistUpdateResponse {
  /**
   * ID of the wordlist
   */
  id: string;

  /**
   * Creation date of the wordlist
   */
  createdAt: string;

  /**
   * Name of the wordlist
   */
  name: string | null;

  /**
   * ID of the organization
   */
  organizationId: string;

  /**
   * Strict mode
   */
  strict: boolean;

  /**
   * ID of the user
   */
  userId: string | null;

  /**
   * Words in the wordlist
   */
  words: Array<string>;
}

/**
 * Array of wordlists
 */
export type WordlistListResponse = Array<WordlistListResponse.WordlistListResponseItem>;

export namespace WordlistListResponse {
  export interface WordlistListResponseItem {
    /**
     * Unique identifier of the wordlist
     */
    id: string;

    /**
     * When the wordlist was created
     */
    createdAt: string | null;

    /**
     * Description of the wordlist
     */
    description: string | null;

    /**
     * Name of the wordlist
     */
    name: string | null;

    /**
     * User who created the wordlist
     */
    userId: string | null;
  }
}

/**
 * Embedding status details
 */
export interface WordlistGetEmbeddingStatusResponse {
  /**
   * Percentage of words that have been embedded (0-100)
   */
  progress: number;

  /**
   * Number of words still waiting to be embedded
   */
  remainingWords: number;

  /**
   * Total number of words in the wordlist
   */
  totalWords: number;
}

export interface WordlistUpdateParams {
  /**
   * New description for the wordlist
   */
  description?: string;

  /**
   * New key for the wordlist
   */
  key?: string;

  /**
   * New name for the wordlist
   */
  name?: string;

  /**
   * Deprecated. Now using threshold in project settings.
   */
  strict?: boolean;

  /**
   * New words for the wordlist. Replace the existing words with these new ones.
   * Duplicate words will be ignored.
   */
  words?: Array<string>;
}

Wordlist.Words = Words;

export declare namespace Wordlist {
  export {
    type WordlistRetrieveResponse as WordlistRetrieveResponse,
    type WordlistUpdateResponse as WordlistUpdateResponse,
    type WordlistListResponse as WordlistListResponse,
    type WordlistGetEmbeddingStatusResponse as WordlistGetEmbeddingStatusResponse,
    type WordlistUpdateParams as WordlistUpdateParams,
  };

  export {
    Words as Words,
    type WordAddResponse as WordAddResponse,
    type WordRemoveResponse as WordRemoveResponse,
    type WordAddParams as WordAddParams,
    type WordRemoveParams as WordRemoveParams,
  };
}
