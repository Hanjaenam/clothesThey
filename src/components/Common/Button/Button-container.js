import React from 'react';
import ButtonView from './Button-view';

const ButtonContainer = ({ children, ...props }) => {
  return <ButtonView {...props}>{children}</ButtonView>;
};

export default ButtonContainer;
