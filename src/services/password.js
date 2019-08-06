import request from '@/utils/request';
import { baseApi } from './baseApi';

const { passwordApi } = baseApi;

export async function fetchPassword() {
  return request(`${passwordApi}/list`);
}

export async function deletePassword(params) {
  const { id } = params;
  return request(`${passwordApi}/${id}`, {
    method: 'DELETE',
  });
}

export async function submitPassword(params) {
  return request(passwordApi, {
    method: 'POST',
    data: params,
  });
}
