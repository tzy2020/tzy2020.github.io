import request from '@/utils/request';
import { baseApi } from './baseApi';

const { userApi } = baseApi;

export async function userLogin(params) {
  return request(`${userApi}/login`, {
    method: 'POST',
    data: params,
  });
}

export async function userRegister(params) {
  return request(`${userApi}/register`, {
    method: 'POST',
    data: params,
  });
}

export async function userLogout() {
  return request(`${userApi}/logout`);
}


export async function getCaptcha({username}) {
  return request(`${userApi}/captcha?username=${username}`);
}
