import React, { useEffect, useReducer, useState } from 'react';
import { getUser } from 'lib/api';
import Loader from 'components/Loading';
import AppView from './App-view';
import Store, { reducer, initialState, logInUser } from './App-store';

const RouterContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      state.getIn(['modal', 'uploadBoard', 'visible']) ||
      state.getIn(['modal', 'sign', 'visible'])
    ) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    getUser()
      .then(res => {
        const { data } = res;
        if (data) {
          dispatch(
            logInUser({
              email: data.email,
              nickname: data.nickname,
              id: data.id,
            }),
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Store.Provider value={[state, dispatch]}>
      {loading ? <Loader /> : <AppView />}
    </Store.Provider>
  );
};

export default RouterContainer;
