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
  name: 'create_with_list_user',
  description: 'Creates list of users with given input array',
  inputSchema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            age: {
              type: 'integer',
            },
            email: {
              type: 'string',
            },
            firstName: {
              type: 'string',
            },
            fullName: {
              type: 'string',
            },
            lastName: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            phone: {
              type: 'string',
            },
            username: {
              type: 'string',
            },
            userStatus: {
              type: 'integer',
              description: 'User Status',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { ...body } = args;
  return client.user.createWithList(body);
};

export default { metadata, tool, handler };
