import request from '@/utils/request';
import { baseApi } from './baseApi';

const { userApi } = baseApi;

export function fetchCurrentUser() {
  return request(`${userApi}/me`);
}

