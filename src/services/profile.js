import request from '@/utils/request';
import { baseApi } from './baseApi';

const { profileApi } = baseApi;

export async function fetchProfile() {
  return request(`${profileApi}`);
}

export async function updateProfile(params) {
  return request(`${profileApi}`, {
    method: 'PUT',
    data: {
      ...params
    }
  });
}
