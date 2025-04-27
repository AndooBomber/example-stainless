// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Petstore from 'fuando-example-stainless';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_pets from './pets/create-pets';
import retrieve_pets from './pets/retrieve-pets';
import update_pets from './pets/update-pets';
import delete_pets from './pets/delete-pets';
import find_by_status_pets from './pets/find-by-status-pets';
import find_by_tags_pets from './pets/find-by-tags-pets';
import update_by_id_pets from './pets/update-by-id-pets';
import upload_image_pets from './pets/upload-image-pets';
import create_order_store from './store/create-order-store';
import inventory_store from './store/inventory-store';
import retrieve_store_order from './store/order/retrieve-store-order';
import delete_order_store_order from './store/order/delete-order-store-order';
import create_user from './user/create-user';
import retrieve_user from './user/retrieve-user';
import update_user from './user/update-user';
import delete_user from './user/delete-user';
import create_with_list_user from './user/create-with-list-user';
import login_user from './user/login-user';
import logout_user from './user/logout-user';

export type HandlerFunction = (client: Petstore, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_pets);
addEndpoint(retrieve_pets);
addEndpoint(update_pets);
addEndpoint(delete_pets);
addEndpoint(find_by_status_pets);
addEndpoint(find_by_tags_pets);
addEndpoint(update_by_id_pets);
addEndpoint(upload_image_pets);
addEndpoint(create_order_store);
addEndpoint(inventory_store);
addEndpoint(retrieve_store_order);
addEndpoint(delete_order_store_order);
addEndpoint(create_user);
addEndpoint(retrieve_user);
addEndpoint(update_user);
addEndpoint(delete_user);
addEndpoint(create_with_list_user);
addEndpoint(login_user);
addEndpoint(logout_user);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
