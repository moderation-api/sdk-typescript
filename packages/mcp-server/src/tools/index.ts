// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_authors from './authors/create-authors';
import retrieve_authors from './authors/retrieve-authors';
import update_authors from './authors/update-authors';
import list_authors from './authors/list-authors';
import delete_authors from './authors/delete-authors';
import retrieve_queue from './queue/retrieve-queue';
import get_stats_queue from './queue/get-stats-queue';
import list_queue_items from './queue/items/list-queue-items';
import resolve_queue_items from './queue/items/resolve-queue-items';
import unresolve_queue_items from './queue/items/unresolve-queue-items';
import create_actions from './actions/create-actions';
import retrieve_actions from './actions/retrieve-actions';
import update_actions from './actions/update-actions';
import list_actions from './actions/list-actions';
import delete_actions from './actions/delete-actions';
import execute_actions_execute from './actions/execute/execute-actions-execute';
import execute_by_id_actions_execute from './actions/execute/execute-by-id-actions-execute';
import submit_content from './content/submit-content';
import list_account from './account/list-account';
import create_auth from './auth/create-auth';
import retrieve_auth from './auth/retrieve-auth';
import retrieve_wordlist from './wordlist/retrieve-wordlist';
import update_wordlist from './wordlist/update-wordlist';
import list_wordlist from './wordlist/list-wordlist';
import get_embedding_status_wordlist from './wordlist/get-embedding-status-wordlist';
import add_wordlist_words from './wordlist/words/add-wordlist-words';
import remove_wordlist_words from './wordlist/words/remove-wordlist-words';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_authors);
addEndpoint(retrieve_authors);
addEndpoint(update_authors);
addEndpoint(list_authors);
addEndpoint(delete_authors);
addEndpoint(retrieve_queue);
addEndpoint(get_stats_queue);
addEndpoint(list_queue_items);
addEndpoint(resolve_queue_items);
addEndpoint(unresolve_queue_items);
addEndpoint(create_actions);
addEndpoint(retrieve_actions);
addEndpoint(update_actions);
addEndpoint(list_actions);
addEndpoint(delete_actions);
addEndpoint(execute_actions_execute);
addEndpoint(execute_by_id_actions_execute);
addEndpoint(submit_content);
addEndpoint(list_account);
addEndpoint(create_auth);
addEndpoint(retrieve_auth);
addEndpoint(retrieve_wordlist);
addEndpoint(update_wordlist);
addEndpoint(list_wordlist);
addEndpoint(get_embedding_status_wordlist);
addEndpoint(add_wordlist_words);
addEndpoint(remove_wordlist_words);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
