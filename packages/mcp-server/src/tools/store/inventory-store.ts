// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Petstore from 'fuando-example-stainless';

export const metadata: Metadata = {
  resource: 'store',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'inventory_store',
  description: 'Returns a map of status codes to quantities',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Petstore, args: any) => {
  const {} = args;
  return client.store.inventory();
};

export default { metadata, tool, handler };
