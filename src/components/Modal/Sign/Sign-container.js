import React, { useContext } from 'react';
import AppContext, { hideModalSign } from 'components/App/App-store';
import { useChange } from 'lib/hooks';
import ModalSignView from './Sign-view';

const ModalSignContainer = () => {
  const appContext = useContext(AppContext);
  const nickname = useChange();
  const password = useChange();
  const confirmPassword = useChange();
  const onMouseLeave = event => {
    event.target.classList.remove('focused');
  };
  const onMouseEnter = event => {
    event.target.classList.add('focused');
  };
  const onCancel = () => {
    appContext[1](hideModalSign());
  };
  return (
    <ModalSignView
      title={appContext[0].getIn(['modal', 'sign', 'title'])}
      nickname={nickname}
      password={password}
      confirmPassword={confirmPassword}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onCancel={onCancel}
    />
  );
};

export default ModalSignContainer;
