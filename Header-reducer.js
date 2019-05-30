import { useReducer } from 'react';

const initialState = {
  signTitle: '',
};

const SET_NAME = 'SET_NAME';

export const setName = signTitle => ({ type: SET_NAME, signTitle });

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, signTitle: action.signTitle };
    default:
      return state;
  }
};

const { state, dispatch } = useReducer(reducer, initialState);

export default { ...state, dispatch };
