import request from '@/utils/request';
import { baseApi } from './baseApi';

const { oplogApi } = baseApi;

export async function fetchOplog() {
  return request(`${oplogApi}`);
}
