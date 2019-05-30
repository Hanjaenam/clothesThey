import React from 'react';
import HeaderView from './Header-view';
import reducer, { setName } from './Header-reducer';

// const useName = () => {
//   const setSignTitleName= event => {
//     const { currentTarget } = event;
//     if (currentTarget.classList.contains('signin')) {
//       reducer.dispatch(setName('로그인'));
//     } else if (currentTarget.classList.contains('signup')) {
//       reducer.dispatch(setName('회원가입'));
//     }
//   };
//   return [name, clickHandler];
// };

const HeaderContainer = () => {
  const setSignTitleName = event => {
    const { currentTarget } = event;
    if (currentTarget.classList.contains('signin')) {
      reducer.dispatch(setName('로그인'));
    } else if (currentTarget.classList.contains('signup')) {
      reducer.dispatch(setName('회원가입'));
    }
  };
  return (
    <HeaderView
      setSignTitleName={setSignTitleName}
      signTitle={reducer.signTitle}
    />
  );
};

export default HeaderContainer;
