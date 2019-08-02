import { fetchUsers, deleteUser } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { message } from 'antd';

export default {
  namespace: 'user',

  state: {
    list: [],
    status: true,
  },

  effects: {
    *fetchUsers(_, { call, put }) {
      const { result } = yield call(fetchUsers);
      yield put({
        type: 'save',
        result,
      });
    },
    * deleteUser({ payload }, { call, put }) {
      const res = yield call(deleteUser, payload);
      if(res && res.success){
        message.success('删除成功！');
        yield put({ type: 'fetchUsers' });
        return;
      }
      message.error( res && res.result.msg ? res.result.msg : '删除失败，请稍后再试！')
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
