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
const LOGIN = 'app/LOGIN';
const LOGOUT = 'app/LOGOUT';

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
export const login = userData => ({
  type: LOGIN,
  userData,
});
export const logout = () => ({
  type: LOGOUT,
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
    case LOGIN:
      return state.set('user', Map({ ...action.userData }));
    case LOGOUT:
      return state.set('user', undefined);
    default:
      return state;
  }
};

export default createContext(null);
