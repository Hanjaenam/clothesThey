import { createContext } from 'react';
import { Map, fromJS } from 'immutable';
import { createAction } from 'redux-actions';

export const initialState = Map({
  modal: {
    uploadBoard: Map({
      visible: false,
    }),
    sign: Map({
      visible: false,
      title: '',
    }),
  },
  user: undefined,
  post: undefined,
});

const SHOW_MODAL_UPLOAD_BOARD = 'app/SHOW_MODAL_UPLOAD_BOARD';
const HIDE_MODAL_UPLOAD_BOARD = 'app/HIDE_MODAL_UPLOAD_BOARD';
const SHOW_MODAL_SIGN = 'app/SHOW_MODAL_SIGN';
const HIDE_MODAL_SIGN = 'app/HIDE_MODAL_SIGN';
const SET_MODAL_SIGN_TITLE = 'app/SET_MODAL_SIGN_TITLE';
const LOG_IN_USER = 'app/LOG_IN_USER';
const LOG_OUT_USER = 'app/LOG_OUT_USER';
const SET_USER = 'app/SET_USER';
const UNSHIFT_NEW_POST = 'app/UNSHIFT_NEW_POST';
const SERVE_POST_DATA = 'app/SERVE_POST_DATA';
const CLEAR_POST_DATA = 'app/CLEAR_POST_DATA';

export const showModalUploadBoard = () => ({
  type: SHOW_MODAL_UPLOAD_BOARD,
});
export const hideModalUploadBoard = () => ({
  type: HIDE_MODAL_UPLOAD_BOARD,
});
export const showModalSign = () => ({
  type: SHOW_MODAL_SIGN,
});
export const hideModalSign = () => ({
  type: HIDE_MODAL_SIGN,
});
export const setModalSignTitle = title => ({
  type: SET_MODAL_SIGN_TITLE,
  title,
});
export const logInUser = ({ id, email, nickname }) => ({
  type: LOG_IN_USER,
  id,
  email,
  nickname,
});
export const logOutUser = () => ({
  type: LOG_OUT_USER,
});
export const setUser = ({ nickname }) => ({
  type: SET_USER,
  nickname,
});
export const unshiftNewPost = createAction(UNSHIFT_NEW_POST);
export const servePostData = createAction(SERVE_POST_DATA);
export const clearPostData = createAction(CLEAR_POST_DATA);

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL_UPLOAD_BOARD:
      return state.setIn(['modal', 'uploadBoard', 'visible'], true);
    case HIDE_MODAL_UPLOAD_BOARD:
      return state.setIn(['modal', 'uploadBoard', 'visible'], false);
    case SHOW_MODAL_SIGN:
      return state.setIn(['modal', 'sign', 'visible'], true);
    case HIDE_MODAL_SIGN:
      return state.setIn(['modal', 'sign', 'visible'], false);
    case SET_MODAL_SIGN_TITLE:
      return state.setIn(['modal', 'sign', 'title'], action.title);
    case LOG_IN_USER: {
      const { id, email, nickname } = action;
      return state.set('user', Map({ id, email, nickname }));
    }
    case LOG_OUT_USER: {
      return state.set('user', undefined);
    }
    case SET_USER: {
      const { nickname } = action;
      return state.setIn(['user', 'nickname'], nickname);
    }
    case UNSHIFT_NEW_POST: {
      const { payload: data } = action;
      data.type = 'new';
      return state.set('post', fromJS(data));
    }
    case SERVE_POST_DATA: {
      const { previewUrl, title, content } = action.payload;
      return state
        .set('post', Map({ type: 'patch', previewUrl, title, content }))
        .setIn(['modal', 'uploadBoard', 'visible'], true);
    }
    case CLEAR_POST_DATA: {
      return state.set('post', undefined);
    }
    default:
      return state;
  }
};

export default createContext(null);
