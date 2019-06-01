import React, { useEffect, useReducer } from 'react';
import AppView from './App-view';
import reducer, { initialState } from './App-reducer';

const RouterContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [showUploadBoard, setUploadBoard] = useState(undefined);
  useEffect(() => {
    if (
      state.getIn(['modal', 'uploadBoard', 'visible']) ||
      state.getIn(['modal', 'sign', 'visible'])
    ) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });
  return (
    <AppView
      dispatch={dispatch}
      modalUploadBoardVisible={state.getIn(['modal', 'uploadBoard', 'visible'])}
      modalSignVisible={state.getIn(['modal', 'sign', 'visible'])}
      signTitle={state.getIn(['modal', 'sign', 'title'])}
    />
  );
};

export default RouterContainer;
