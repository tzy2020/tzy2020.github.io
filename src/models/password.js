import { fetchPassword, deletePassword, submitPassword } from '@/services/password';
import { message } from 'antd';
import router from "umi/router";

export default {
  namespace: 'password',

  state: {
    list: [],
    drawerData: {
      visible: false,
      record: {},
      title: '',
    }
  },

  effects: {
    *fetchPassword(_, { call, put }) {
      const { result } = yield call(fetchPassword);
      yield put({
        type: 'saveState',
        payload: { list: result },
      });
    },
    * deletePassword({ payload }, { call, put }) {
      const res = yield call(deletePassword, payload);
      if(res && res.success){
        message.success('删除成功！');
        yield put({ type: 'fetchPassword' });
        return;
      }
      message.error( res && res.result.msg ? res.result.msg : '删除失败，请稍后再试！')
    },
    * submitPassword({ payload }, { call, put }) {
      const res = yield call(submitPassword, payload);
      if (res && res.success) {
        message.success(res.result && res.result.msg ? res.result.msg : '提交成功！');
        yield put({
          type: 'fetchPassword',
        });
        return true;
      }
      message.error(res && res.result.msg ? res.result.msg : '提交失败，请稍后再试！')
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
        if (pathname === '/password') {
          dispatch({
            type: 'fetchPassword',
          });
        }
      });
    },
  },
};
