// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Petstore from 'fuando-example-stainless';

export const metadata: Metadata = {
  resource: 'store',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_order_store',
  description: 'Place a new order in the store',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      complete: {
        type: 'boolean',
      },
      petId: {
        type: 'integer',
      },
      quantity: {
        type: 'integer',
      },
      shipDate: {
        type: 'string',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Order Status',
        enum: ['placed', 'approved', 'delivered'],
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { ...body } = args;
  return client.store.createOrder(body);
};

export default { metadata, tool, handler };
