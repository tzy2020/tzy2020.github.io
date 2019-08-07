import { fetchNotesList, fetchNoteDetail, submitNote, deleteNote } from '@/services/notes';
import router from 'umi/router';
import { message } from 'antd';

export default {
  namespace: 'notes',

  state: {
    list: [],
    noteDetail: {}
  },

  effects: {
    * fetchNotesList({ params }, { call, put }) {
      const { result, success } = yield call(fetchNotesList, params);
      if (success) {
        yield put({
          type: 'saveState',
          payload: {
            list: result,
          }
        });
      }
    },
    * fetchNoteDetail({ noteId }, { call, put }) {
      const res = yield call(fetchNoteDetail, { noteId });
      if (res && res.result) {
        yield put({
          type: 'saveState',
          payload: {
            noteDetail: {
              ...res.result,
              keyword: JSON.parse(res.result.keyword),
            }
          },
        });
      }
    },
    * deleteNote({ noteId }, { call, put }) {
      const res = yield call(deleteNote, { noteId });
      if (res && res.success) {
        message.success('删除成功！');
        yield put({ type: 'fetchNotesList' });
        return;
      }
      message.error(res && res.result.msg ? res.result.msg : '删除失败，请稍后再试！')
    },

    * submitNote({ payload }, { call }) {
      const res = yield call(submitNote, payload);
      if (res && res.success) {
        message.success(res.result && res.result.msg ? res.result.msg : '提交成功！');
        const noteId = res.result.noteId;
        router.push(`/notes/edit?noteId=${noteId}`);
        return;
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
    saveNoteDetail(state, { payload }) {
      return {
        ...state,
        noteDetail: {
          ...state.noteDetail,
          ...payload,
        }
      };
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/notes/edit') {
          if (query && query.noteId !== undefined) {
            dispatch({
              type: 'fetchNoteDetail',
              noteId: query.noteId
            });
          } else {
            dispatch({
              type: 'saveState',
              payload: {
                noteDetail: {},
              }
            })
          }
        }

        if (pathname === '/notes/list') {
          dispatch({
            type: 'fetchNotesList',
          });
        }
      });
    },
  },
};
