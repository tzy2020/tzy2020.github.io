import { fetchOplog } from '@/services/oplog';

export default {
  namespace: 'oplog',

  state: {
    list: [],
  },

  effects: {
    * fetchOplog(_, { call, put }) {
      const { result } = yield call(fetchOplog);
      yield put({
        type: 'saveState',
        payload: {
          list: result,
        }
      });
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
        if (pathname === '/oplog') {
          dispatch({
            type: 'fetchOplog',
          })
        }
      });
    },
  },
};
