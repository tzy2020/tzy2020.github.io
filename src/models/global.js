import { fetchCurrentUser } from '@/services/global';
import { reloadAuthorized } from '../utils/Authorized';

export default {
  namespace: 'global',

  state: {
    collapsed: true,
    currentUser: {
      nikename: '',
      isAdmin: false,
      authority: [],
    },
  },

  effects: {
    // 当前用户
    *fetchCurrentUser(_, { call, put }) {
      const { result, success } = yield call(fetchCurrentUser);
      if (success) {
        yield put({
          type: 'saveCurrentUser',
          payload: result,
        });
        reloadAuthorized();
      }
    },
  },

  reducers: {
    // 侧边栏 收起/展开
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },

    // 当前用户
    saveCurrentUser(state, { payload }) {
      return {
        ...state,
        currentUser: {
          ...payload,
          authority: ['admin'],
        },
      };
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'setting/getSetting',
      });
      dispatch({
        type: 'fetchCurrentUser',
      });
    },
  },
};
