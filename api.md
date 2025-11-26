# Authors

Types:

- <code><a href="./src/resources/authors.ts">AuthorCreateResponse</a></code>
- <code><a href="./src/resources/authors.ts">AuthorRetrieveResponse</a></code>
- <code><a href="./src/resources/authors.ts">AuthorUpdateResponse</a></code>
- <code><a href="./src/resources/authors.ts">AuthorListResponse</a></code>
- <code><a href="./src/resources/authors.ts">AuthorDeleteResponse</a></code>

Methods:

- <code title="post /authors">client.authors.<a href="./src/resources/authors.ts">create</a>({ ...params }) -> AuthorCreateResponse</code>
- <code title="get /authors/{id}">client.authors.<a href="./src/resources/authors.ts">retrieve</a>(id) -> AuthorRetrieveResponse</code>
- <code title="put /authors/{id}">client.authors.<a href="./src/resources/authors.ts">update</a>(id, { ...params }) -> AuthorUpdateResponse</code>
- <code title="get /authors">client.authors.<a href="./src/resources/authors.ts">list</a>({ ...params }) -> AuthorListResponse</code>
- <code title="delete /authors/{id}">client.authors.<a href="./src/resources/authors.ts">delete</a>(id) -> AuthorDeleteResponse</code>

# Queue

Types:

- <code><a href="./src/resources/queue/queue.ts">QueueRetrieveResponse</a></code>
- <code><a href="./src/resources/queue/queue.ts">QueueGetStatsResponse</a></code>

Methods:

- <code title="get /queue/{id}">client.queue.<a href="./src/resources/queue/queue.ts">retrieve</a>(id) -> QueueRetrieveResponse</code>
- <code title="get /queue/{id}/stats">client.queue.<a href="./src/resources/queue/queue.ts">getStats</a>(id, { ...params }) -> QueueGetStatsResponse</code>

## Items

Types:

- <code><a href="./src/resources/queue/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/queue/items.ts">ItemResolveResponse</a></code>
- <code><a href="./src/resources/queue/items.ts">ItemUnresolveResponse</a></code>

Methods:

- <code title="get /queue/{id}/items">client.queue.items.<a href="./src/resources/queue/items.ts">list</a>(id, { ...params }) -> ItemListResponse</code>
- <code title="post /queue/{id}/items/{itemId}/resolve">client.queue.items.<a href="./src/resources/queue/items.ts">resolve</a>(itemID, { ...params }) -> ItemResolveResponse</code>
- <code title="post /queue/{id}/items/{itemId}/unresolve">client.queue.items.<a href="./src/resources/queue/items.ts">unresolve</a>(itemID, { ...params }) -> ItemUnresolveResponse</code>

# Actions

Types:

- <code><a href="./src/resources/actions/actions.ts">ActionCreateResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionUpdateResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionDeleteResponse</a></code>

Methods:

- <code title="post /actions">client.actions.<a href="./src/resources/actions/actions.ts">create</a>({ ...params }) -> ActionCreateResponse</code>
- <code title="get /actions/{id}">client.actions.<a href="./src/resources/actions/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="put /actions/{id}">client.actions.<a href="./src/resources/actions/actions.ts">update</a>(id, { ...params }) -> ActionUpdateResponse</code>
- <code title="get /actions">client.actions.<a href="./src/resources/actions/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="delete /actions/{id}">client.actions.<a href="./src/resources/actions/actions.ts">delete</a>(id) -> ActionDeleteResponse</code>

## Execute

Types:

- <code><a href="./src/resources/actions/execute.ts">ExecuteExecuteResponse</a></code>
- <code><a href="./src/resources/actions/execute.ts">ExecuteExecuteByIDResponse</a></code>

Methods:

- <code title="post /actions/execute">client.actions.execute.<a href="./src/resources/actions/execute.ts">execute</a>({ ...params }) -> ExecuteExecuteResponse</code>
- <code title="post /actions/{actionId}/execute">client.actions.execute.<a href="./src/resources/actions/execute.ts">executeByID</a>(actionID, { ...params }) -> ExecuteExecuteByIDResponse</code>

# Moderate

Types:

- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeResponse</a></code>
- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeAudioResponse</a></code>
- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeImageResponse</a></code>
- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeObjectResponse</a></code>
- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeTextResponse</a></code>
- <code><a href="./src/resources/moderate.ts">ModerateAnalyzeVideoResponse</a></code>

Methods:

- <code title="post /moderate">client.moderate.<a href="./src/resources/moderate.ts">analyze</a>({ ...params }) -> ModerateAnalyzeResponse</code>
- <code title="post /moderate/audio">client.moderate.<a href="./src/resources/moderate.ts">analyzeAudio</a>({ ...params }) -> ModerateAnalyzeAudioResponse</code>
- <code title="post /moderate/image">client.moderate.<a href="./src/resources/moderate.ts">analyzeImage</a>({ ...params }) -> ModerateAnalyzeImageResponse</code>
- <code title="post /moderate/object">client.moderate.<a href="./src/resources/moderate.ts">analyzeObject</a>({ ...params }) -> ModerateAnalyzeObjectResponse</code>
- <code title="post /moderate/text">client.moderate.<a href="./src/resources/moderate.ts">analyzeText</a>({ ...params }) -> ModerateAnalyzeTextResponse</code>
- <code title="post /moderate/video">client.moderate.<a href="./src/resources/moderate.ts">analyzeVideo</a>({ ...params }) -> ModerateAnalyzeVideoResponse</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">AccountListResponse</a></code>

Methods:

- <code title="get /account">client.account.<a href="./src/resources/account.ts">list</a>() -> AccountListResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthCreateResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRetrieveResponse</a></code>

Methods:

- <code title="post /auth">client.auth.<a href="./src/resources/auth.ts">create</a>() -> AuthCreateResponse</code>
- <code title="get /auth">client.auth.<a href="./src/resources/auth.ts">retrieve</a>() -> AuthRetrieveResponse</code>

# Wordlist

Types:

- <code><a href="./src/resources/wordlist/wordlist.ts">WordlistRetrieveResponse</a></code>
- <code><a href="./src/resources/wordlist/wordlist.ts">WordlistUpdateResponse</a></code>
- <code><a href="./src/resources/wordlist/wordlist.ts">WordlistListResponse</a></code>
- <code><a href="./src/resources/wordlist/wordlist.ts">WordlistGetEmbeddingStatusResponse</a></code>

Methods:

- <code title="get /wordlist/{id}">client.wordlist.<a href="./src/resources/wordlist/wordlist.ts">retrieve</a>(id) -> WordlistRetrieveResponse</code>
- <code title="put /wordlist/{id}">client.wordlist.<a href="./src/resources/wordlist/wordlist.ts">update</a>(id, { ...params }) -> WordlistUpdateResponse</code>
- <code title="get /wordlist">client.wordlist.<a href="./src/resources/wordlist/wordlist.ts">list</a>() -> WordlistListResponse</code>
- <code title="get /wordlist/{id}/embedding-status">client.wordlist.<a href="./src/resources/wordlist/wordlist.ts">getEmbeddingStatus</a>(id) -> WordlistGetEmbeddingStatusResponse</code>

## Words

Types:

- <code><a href="./src/resources/wordlist/words.ts">WordAddResponse</a></code>
- <code><a href="./src/resources/wordlist/words.ts">WordRemoveResponse</a></code>

Methods:

- <code title="post /wordlist/{id}/words">client.wordlist.words.<a href="./src/resources/wordlist/words.ts">add</a>(id, { ...params }) -> WordAddResponse</code>
- <code title="delete /wordlist/{id}/words">client.wordlist.words.<a href="./src/resources/wordlist/words.ts">remove</a>(id, { ...params }) -> WordRemoveResponse</code>
