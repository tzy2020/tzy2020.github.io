import { fetchSystemConfig, updateConfig } from '@/services/system';
import { message } from 'antd';

export default {
  namespace: 'system',

  state: {
    notice: '',
    mode: 0,
  },

  effects: {
    * fetchSystemConfig(_, { call, put }) {
      const { result } = yield call(fetchSystemConfig);
      yield put({
        type: 'saveState',
        payload: {
          ...result,
        }
      });
    },

    * updateConfig({ payload }, { call, put }) {
      const res = yield call(updateConfig, payload);
      if (res && res.success) {
        message.success('更新成功！');
        yield put({
          type: 'fetchSystemConfig'
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
        if (pathname === '/system') {
          dispatch({
            type: 'fetchSystemConfig',
          })
        }
      });
    },
  },
};
