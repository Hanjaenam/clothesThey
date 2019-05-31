import React, { useEffect, useReducer } from 'react';
import AppView from './App-view';
import reducer, { initialState } from './App-reducer';

const RouterContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [showUploadBoard, setUploadBoard] = useState(undefined);
  useEffect(() => {
    if (state.getIn(['modal', 'uploadBoard']) === true) {
      document.body.style.overflowY = 'hidden';
    } else if (state.getIn(['modal', 'uploadBoard']) === false) {
      document.body.style.overflowY = 'auto';
    }
  });
  return (
    <AppView
      dispatch={dispatch}
      modalUploadBoard={state.getIn(['modal', 'uploadBoard'])}
      modalSign={state.getIn(['modal', 'sign', 'visible'])}
      signTitle={state.getIn(['modal', 'sign', 'title'])}
    />
  );
};

export default RouterContainer;
