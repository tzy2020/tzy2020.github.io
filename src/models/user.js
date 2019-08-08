import { fetchUsers, deleteUser, submitUserInfo } from '@/services/user';
import { message } from 'antd';

export default {
  namespace: 'user',

  state: {
    list: [],
    visible: false,
    record: {},
    title: '',
  },

  effects: {
    * fetchUsers(_, { call, put }) {
      const { result, success } = yield call(fetchUsers);
      if (success) {
        yield put({
          type: 'saveState',
          payload: { list: result },
        });
      }
    },
    * deleteUser({ payload }, { call, put }) {
      const res = yield call(deleteUser, payload);
      if (res && res.success) {
        message.success('删除成功！');
        yield put({ type: 'fetchUsers' });
        return;
      }
      message.error(res && res.result.msg ? res.result.msg : '删除失败，请稍后再试！');
    },

    * submitUserInfo({ payload }, { call, put }) {
      const res = yield call(submitUserInfo, payload);
      if (res && res.success) {
        message.success('更新成功！');
        yield put({
          type: 'fetchUsers'
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
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname }) => {
        if (pathname === '/user') {
          dispatch({
            type: 'fetchUsers',
          });
        }
      });
    },
  },
};
