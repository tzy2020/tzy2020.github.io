import request from '@/utils/request';
import { baseApi } from './baseApi';

const { systemApi } = baseApi;

export async function fetchSystemConfig() {
  return request(`${systemApi}/config`);
}

export async function fetchSystemInfo() {
  return request(`${systemApi}/info`);
}

export async function updateConfig(params) {
  return request(`${systemApi}`, {
    method: 'PUT',
    data: {
      ...params
    }
  });
}
