import React, { useEffect, useReducer } from 'react';
import AppView from './App-view';
import AppContext, {
  reducer,
  initialState,
  hideModalSign,
  hideModalUploadBoard,
} from './App-store';

const RouterContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    <AppContext.Provider value={[state, dispatch]}>
      <AppView
        modalSign={{
          visible: state.getIn(['modal', 'sign', 'visible']),
          hideModal: () => dispatch(hideModalSign()),
        }}
        modalUpload={{
          visible: state.getIn(['modal', 'uploadBoard', 'visible']),
          hideModal: () => dispatch(hideModalUploadBoard()),
        }}
      />
    </AppContext.Provider>
  );
};

export default RouterContainer;
