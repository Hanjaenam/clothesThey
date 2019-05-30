import React, { useState, useEffect } from 'react';
import Store from 'store';
import RouterView from './Router-view';
// import reducer, { initialState } from './Router-reducer';

const RouterContainer = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [showUploadBoard, setUploadBoard] = useState(undefined);
  useEffect(() => {
    if (showUploadBoard === true) {
      document.body.style.overflowY = 'hidden';
    } else if (showUploadBoard === false) {
      document.body.style.overflowY = 'auto';
    }
  });
  return (
    <RouterView
      Store={Store}
      showUploadBoard={showUploadBoard}
      setUploadBoard={setUploadBoard}
      // routerState={() => ({ ...state, dispatch })}
    />
  );
};

export default RouterContainer;
