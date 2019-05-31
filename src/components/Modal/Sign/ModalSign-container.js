import React, { useContext } from 'react';
import Store from 'store';
import { hideModalSign } from 'components/App/App-reducer';
import PropTypes from 'prop-types';
import { useChange } from 'lib/hooks';
import ModalSignView from './MoadlSign-view';

const ModalSignContainer = ({ title }) => {
  const dispatch = useContext(Store);
  const nickname = useChange();
  const password = useChange();
  const confirmPassword = useChange();
  const onMouseLeave = event => {
    event.target.classList.remove('focused');
  };
  const onMouseEnter = event => {
    event.target.classList.add('focused');
  };
  const onClick = () => {
    dispatch(hideModalSign());
  };
  return (
    <ModalSignView
      title={title}
      nickname={nickname}
      password={password}
      confirmPassword={confirmPassword}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    />
  );
};
ModalSignContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalSignContainer;
