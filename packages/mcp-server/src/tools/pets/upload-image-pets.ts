// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Petstore from 'fuando-example-stainless';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'upload_image_pets',
  description: 'uploads an image',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      additionalMetadata: {
        type: 'string',
        description: 'Additional Metadata',
      },
      image: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Petstore, args: any) => {
  const { petId, ...body } = args;
  return client.pets.uploadImage(petId, body);
};

export default { metadata, tool, handler };
