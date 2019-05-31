import React, { useContext } from 'react';
import { showModalSign, setModalSignTitle } from 'components/App/App-reducer';
import Store from 'store';
import HeaderView from './Header-view';

const HeaderContainer = () => {
  const dispatch = useContext(Store);
  return (
    <HeaderView
      onClick={title => {
        dispatch(showModalSign());
        dispatch(setModalSignTitle(title));
      }}
      // modalVisible={modalVisible}
    />
  );
};

export default HeaderContainer;
