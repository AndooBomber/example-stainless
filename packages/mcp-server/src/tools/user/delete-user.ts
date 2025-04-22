// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Petstore from 'fuando-example-stainless';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_user',
  description: 'This can only be done by the logged in user.',
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { username } = args;
  return client.user.delete(username);
};

export default { metadata, tool, handler };
