import { fetchProfile, updateProfile } from '@/services/profile';
import { message } from 'antd';

export default {
  namespace: 'profile',

  state: {
    nikename: 'xiaokeai',
  },

  effects: {
    * fetchProfile(_, { call, put }) {
      const { result } = yield call(fetchProfile);
      yield put({
        type: 'saveState',
        payload: {
          ...result,
        }
      });
    },

    * updateProfile({ payload }, { call, put }) {
      const res = yield call(updateProfile, payload);
      if (res && res.success) {
        message.success('更新成功！');
        yield put({
          type: 'fetchProfile'
        });
        yield put({
          type: 'global/fetchCurrentUser'
        });
      } else {
        message.error('更新失败，请稍后再试！');
      }
    },
  },

  reducers: {
    saveState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/profile') {
          dispatch({
            type: 'fetchProfile',
          })
        }
      });
    },
  },
};
