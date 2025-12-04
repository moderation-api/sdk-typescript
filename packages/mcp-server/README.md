# Moderation API TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export MODAPI_SECRET_KEY="My Secret Key"
npx -y @moderation-api/sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "moderation_api_sdk_api": {
      "command": "npx",
      "args": ["-y", "@moderation-api/sdk-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "MODAPI_SECRET_KEY": "My Secret Key"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=@moderation-api/sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlcmF0aW9uLWFwaS9zZGstbWNwIl0sImVudiI6eyJNT0RBUElfU0VDUkVUX0tFWSI6IlNldCB5b3VyIE1PREFQSV9TRUNSRVRfS0VZIGhlcmUuIn19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40moderation-api%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40moderation-api%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22MODAPI_SECRET_KEY%22%3A%22Set%20your%20MODAPI_SECRET_KEY%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio moderation_api_sdk_api --env MODAPI_SECRET_KEY="Your MODAPI_SECRET_KEY here." -- npx -y @moderation-api/sdk-mcp
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| --------------------- | ------------------------ | --------------- |
| `x-modapi-secret-key` | `secretKey` | Authorization |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "moderation_api_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@moderation-api/sdk-mcp/server";

// import a specific tool
import createAuthors from "@moderation-api/sdk-mcp/tools/authors/create-authors";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAuthors, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `authors`:

- `create_authors` (`write`): Create a new author. Typically not needed as authors are created automatically when content is moderated.
- `retrieve_authors` (`read`): Get detailed information about a specific author including historical data and analysis
- `update_authors` (`write`): Update the details of a specific author
- `list_authors` (`read`): Get a paginated list of authors with their activity metrics and reputation
- `delete_authors` (`write`): Delete a specific author

### Resource `queue`:

- `retrieve_queue` (`read`): Get a queue
- `get_stats_queue` (`read`): Get detailed statistics about a moderation queue including review times, action counts, and trends

### Resource `queue.items`:

- `list_queue_items` (`read`): Get paginated list of items in a moderation queue with filtering options
- `resolve_queue_items` (`write`): Mark a queue item as resolved with a specific moderation action
- `unresolve_queue_items` (`write`): Mark a previously resolved queue item as unresolved/pending

### Resource `actions`:

- `create_actions` (`write`): Create an action.
- `retrieve_actions` (`read`): Get an action by ID.
- `update_actions` (`write`): Update an action.
- `list_actions` (`read`): List all available moderation actions for the authenticated organization.
- `delete_actions` (`write`): Delete an action and all of its webhooks.

### Resource `actions.execute`:

- `execute_actions_execute` (`write`): Execute a moderation action on one or more content items.
- `execute_by_id_actions_execute` (`write`): Execute an action on a set of content items in a queue.

### Resource `content`:

- `submit_content` (`write`):

### Resource `account`:

- `list_account` (`read`): Get account details

### Resource `auth`:

- `create_auth` (`write`):
- `retrieve_auth` (`read`):

### Resource `wordlist`:

- `retrieve_wordlist` (`read`): Get a specific wordlist by ID
- `update_wordlist` (`write`): Update a wordlist
- `list_wordlist` (`read`): List all wordlists for the authenticated organization
- `get_embedding_status_wordlist` (`read`): Get the current embedding progress status for a wordlist

### Resource `wordlist.words`:

- `add_wordlist_words` (`write`): Add words to an existing wordlist
- `remove_wordlist_words` (`write`): Remove words from an existing wordlist
