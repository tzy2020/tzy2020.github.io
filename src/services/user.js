import request from '@/utils/request';
import { baseApi } from './baseApi';

const { userApi } = baseApi;

export async function fetchUsers() {
  return request(`${userApi}/list`);
}

export async function update(params) {
  const { userId, role } = params;
  return request(`${userApi}/${userId}`, {
    method: 'PUT',
    data: {
      userId,
      role,
    },
  });
}

export async function deleteUser(params) {
  return request(userApi, {
    method: 'DELETE',
    data: params,
  });
}
