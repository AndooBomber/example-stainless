// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Petstore from 'fuando-example-stainless';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_pets',
  description: 'Returns a single pet',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { petId } = args;
  return client.pets.retrieve(petId);
};

export default { metadata, tool, handler };
