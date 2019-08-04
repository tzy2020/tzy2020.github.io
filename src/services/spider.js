import request from '@/utils/request';
import { baseApi } from './baseApi';

const { spiderApi } = baseApi;

export async function fetchPassword() {
  return request(`${spiderApi}/list`);
}

export async function updatePassword(params) {
  return request(`${spiderApi}/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      id: undefined,
    },
  });
}

export async function deletePassword(params) {
  return request(spiderApi, {
    method: 'DELETE',
    data: params,
  });
}
