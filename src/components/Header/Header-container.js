import React, { useState, useEffect } from 'react';
import HeaderView from './Header-view';
import * as jss from './Header-styles';

const useSignTitle = () => {
  const [signTitle, setSignTitle] = useState('');
  const setSignTitleHandler = event => {
    setSignTitle(event.target.textContent);
  };
  return [signTitle, setSignTitleHandler];
};

const HeaderContainer = () => {
  const [signTitle, setSignTitle] = useSignTitle('');
  const event = {
    signContainer: {
      mouseleave: event => {
        event.target.classList.remove('focused');
      },
      mouseenter: event => {
        event.target.classList.add('focused');
      },
    },
    button: {
      toggle: () => {
        const signContainer = document.querySelector(
          `.${jss.SignContainer.styledComponentId}`,
        );
        const nickname = document.querySelector(
          `.${jss.Input.styledComponentId}.nickname`,
        );
        if (signContainer.classList.toggle('show')) {
          signContainer.classList.add('focused');
        } else {
          signContainer.classList.remove('focused');
        }
        nickname.focus();
      },
    },
    window: {
      hide: () => {
        const signContainer = document.querySelector(
          `.${jss.SignContainer.styledComponentId}`,
        );
        if (signContainer.classList.contains('focused')) return;
        signContainer.classList.remove('show');
      },
    },
  };

  useEffect(() => {
    const signinButton = document.querySelector(
      `.${jss.Button.styledComponentId}.signin`,
    );
    const signupButton = document.querySelector(
      `.${jss.Button.styledComponentId}.signup`,
    );
    window.addEventListener('click', event.window.hide);
    signinButton.addEventListener('click', setSignTitle);
    signupButton.addEventListener('click', setSignTitle);
  });
  return (
    <HeaderView
      signTitle={signTitle}
      signContainerMLeave={event.signContainer.mouseleave}
      signContainerMEnter={event.signContainer.mouseenter}
      buttonClick={event.button.toggle}
    />
  );
};

export default HeaderContainer;
