import { message } from 'antd';
import { userLogin, userRegister, userLogout } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import router from 'umi/router';

export default {
  namespace: 'login',

  state: {},

  reducers: {},

  effects: {
    * login({ payload }, { call, put }) {
      const res = yield call(userLogin, payload);
      if (res && res.success) {
        message.success('登录成功！');
        yield put({
          type: 'global/fetchCurrentUser',
        });
        router.push('/');
      } else {
        message.error(res && res.result.msg ? res.result.msg : '登录失败，请稍后重试！');
      }
    },

    * register({ payload }, { call, put }) {
      const res = yield call(userRegister, payload);
      if (res && res.success) {
        message.success('注册成功！');
        yield put({
          type: 'global/fetchCurrentUser',
        });
        router.push('/');
      } else {
        message.error(res && res.result.msg ? res.result.msg : '注册失败，请稍后重试！');
      }
    },

    * logout(_, { call }) {
      const res = yield call(userLogout);
      if (res && res.success) {
        message.success('登出成功！');
        router.push('/login/login');
      } else {
        message.error(res && res.result.msg ? res.result.msg : '登出失败！');
      }
    },
  },
};
