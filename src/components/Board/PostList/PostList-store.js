import { createContext } from 'react';
import { List, fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const initialState = List([]);

const INITIALIZE_POST = 'board/INITIALIZE_POST';
const PUSH_POST = 'board/PUSH_POST';
const UNSHIFT_POST = 'board/UNSHIFT_POST';
const DELETE_POST = 'board/DELETE_POST';
const CLEAR_POST = 'board/CLEAR_POST';
const ADD_LIKE = 'board/ADD_LIKE';

export const initializePost = createAction(INITIALIZE_POST);
export const pushPost = createAction(PUSH_POST);
export const unshiftPost = createAction(UNSHIFT_POST);
export const deletePost = createAction(DELETE_POST);
export const clearPost = createAction(CLEAR_POST);
export const addLike = createAction(ADD_LIKE);

export const reducer = handleActions(
  {
    [INITIALIZE_POST]: (state, action) => {
      const { payload: data } = action;
      return state.clear().push(...fromJS(data));
      // return state;
    },
    [PUSH_POST]: (state, action) => {
      const { payload: data } = action;
      return state.push(...fromJS(data));
    },
    [UNSHIFT_POST]: (state, action) => {
      const { payload: data } = action;
      return state.unshift(data);
    },
    [DELETE_POST]: (state, action) => {
      const { payload: id } = action;
      const idx = state.findIndex(post => post.get('_id') === id);
      return state.delete(idx);
    },
    [CLEAR_POST]: (state, _) => {
      return state.clear();
    },
    [ADD_LIKE]: (state, action) => {
      const { postId, userId } = action.payload;
      const idx = state.findIndex(post => post.get('_id') === postId);
      return state.updateIn([idx, 'like'], arr => arr.push(userId));
    },
  },
  initialState,
);
export default createContext(null);
