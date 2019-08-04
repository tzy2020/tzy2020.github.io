import request from '@/utils/request';
import { baseApi } from './baseApi';

const { passwordApi } = baseApi;

export async function fetchPassword() {
  return request(`${passwordApi}/list`);
}

export async function updatePassword(params) {
  return request(`${passwordApi}/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      id: undefined,
    },
  });
}

export async function deletePassword(params) {
  return request(passwordApi, {
    method: 'DELETE',
    data: params,
  });
}
