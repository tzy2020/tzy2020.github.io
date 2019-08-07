import { fetchPassword, deletePassword } from '@/services/spider';
import { message } from 'antd';

export default {
  namespace: 'spider',

  state: {
    list: [],
    status: true,
  },

  effects: {
    *fetchPassword(_, { call, put }) {
      const { result, success } = yield call(fetchPassword);
      if (success) {
        yield put({
          type: 'save',
          result,
        });
      }
    },
    *deletePassword({ payload }, { call, put }) {
      const res = yield call(deletePassword, payload);
      if (res && res.success) {
        message.success('删除成功！');
        yield put({ type: 'fetchPassword' });
        return;
      }
      message.error(res && res.result.msg ? res.result.msg : '删除失败，请稍后再试！');
    },
  },

  reducers: {
    save(state, { result }) {
      return {
        ...state,
        list: result,
      };
    },
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       if (pathname === '/spider') {}
  //     });
  //   },
  // },
};
