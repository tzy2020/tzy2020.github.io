import React from 'react';
import { extend } from 'umi-request';
import { notification } from 'antd';
import router from 'umi/router';

const errorHandler = async error => {
  const { response = {} } = error;
  const { status = '请求失败！', url = '接口url错误，或者后端服务未启动！' } = response;

  notification.error({
    message: `请求错误： ${status}`,
    description: <span style={{ wordBreak: 'break-all' }}>{url}</span>,
  });

  let data = response;
  try {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.clone().json();
    } else {
      data = await response.clone().text();
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    router.push('/login/login')
  }
  return data;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  mode: 'cors', // 是否跨域
});

request.interceptors.response.use(async response => {
  // 注意fetch 请求返回码是404，500等等并不会报错
  if (!response.ok) {
    const error = new Error();
    error.response = response;
    throw error;
  }

  const contentType = response.headers.get('content-type');
  if (response.status === 200 && contentType && contentType.includes('application/json')) {
    const { result } = await response.clone().json();
    // 是否登录判断
    if (result && result.isLogin === false) {
      router.push('/login/login');
    }
  }

  return response;
});

export default request;
