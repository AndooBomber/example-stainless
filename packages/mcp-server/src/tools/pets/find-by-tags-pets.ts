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
  name: 'find_by_tags_pets',
  description:
    'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
  inputSchema: {
    type: 'object',
    properties: {
      tags: {
        type: 'array',
        description: 'Tags to filter by',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { ...body } = args;
  return client.pets.findByTags(body);
};

export default { metadata, tool, handler };
