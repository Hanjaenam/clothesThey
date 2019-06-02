import React, { useContext } from 'react';
import AppContext, {
  showModalSign,
  setModalSignTitle,
} from 'components/App/App-store';
import HeaderView from './Header-view';

const HeaderContainer = () => {
  const appContext = useContext(AppContext);
  return (
    <HeaderView
      onClick={title => {
        appContext[1](showModalSign());
        appContext[1](setModalSignTitle(title));
      }}
      user={appContext[0].get('user')}
    />
  );
};

export default HeaderContainer;
