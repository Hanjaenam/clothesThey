import { createContext } from 'react';
import { Map } from 'immutable';

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
});

const SHOW_MODAL_UPLOAD_BOARD = 'app/SHOW_MODAL_UPLOAD_BOARD';
const HIDE_MODAL_UPLOAD_BOARD = 'app/HIDE_MODAL_UPLOAD_BOARD';
const SHOW_MODAL_SIGN = 'app/SHOW_MODAL_SIGN';
const HIDE_MODAL_SIGN = 'app/HIDE_MODAL_SIGN';
const SET_MODAL_SIGN_TITLE = 'app/SET_MODAL_SIGN_TITLE';
const LOG_IN_USER = 'app/LOG_IN_USER';
const LOG_OUT_USER = 'app/LOG_OUT_USER';
const SET_USER = 'app/SET_USER';

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
export const logInUser = ({ email, nickname }) => ({
  type: LOG_IN_USER,
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
      const { email, nickname } = action;
      return state.set('user', Map({ email, nickname }));
    }
    case LOG_OUT_USER: {
      return state.set('user', undefined);
    }
    case SET_USER: {
      const { nickname } = action;
      return state.setIn(['user', 'nickname'], nickname);
    }
    default:
      return state;
  }
};

export default createContext(null);
