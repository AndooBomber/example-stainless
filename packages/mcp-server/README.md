# Petstore TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export PETSTORE_API_KEY="My API Key"
npx -y fuando-example-stainless-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "fuando_example_stainless_api": {
      "command": "npx",
      "args": ["-y", "fuando-example-stainless-mcp"],
      "env": {
        "PETSTORE_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "fuando-example-stainless-mcp/server";

// import a specific tool
import createPets from "fuando-example-stainless-mcp/tools/pets/create-pets";

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
init({ server: myServer, endpoints: [createPets, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `pets`:

- `create_pets` (`write`): Add a new pet to the store
- `retrieve_pets` (`read`): Returns a single pet
- `update_pets` (`write`): Update an existing pet by Id
- `delete_pets` (`write`): delete a pet
- `find_by_status_pets` (`read`): Multiple status values can be provided with comma separated strings
- `find_by_tags_pets` (`read`): Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
- `update_by_id_pets` (`write`): Updates a pet in the store with form data
- `upload_image_pets` (`write`): uploads an image

### Resource `store`:

- `create_order_store` (`write`): Place a new order in the store
- `inventory_store` (`read`): Returns a map of status codes to quantities

### Resource `store.order`:

- `retrieve_store_order` (`read`): For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
- `delete_order_store_order` (`write`): For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Resource `user`:

- `create_user` (`write`): This can only be done by the logged in user.
- `retrieve_user` (`read`): Get user by user name
- `update_user` (`write`): This can only be done by the logged in user.
- `delete_user` (`write`): This can only be done by the logged in user.
- `create_with_list_user` (`write`): Creates list of users with given input array
- `login_user` (`read`): Logs user into the system
- `logout_user` (`read`): Logs out current logged in user session
