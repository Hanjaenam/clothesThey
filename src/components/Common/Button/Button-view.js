import React from 'react';
import * as jss from './Button-styles';

const Button = ({ children, ...props }) => (
  <jss.Button {...props}>
    <span>{children}</span>
  </jss.Button>
);

const LinkedButton = ({ children, ...props }) => (
  <jss.LinkedButton {...props}>
    <span>{children}</span>
  </jss.LinkedButton>
);

const ButtonView = ({ children, to, onClick, clicked, disabled, ...props }) => {
  const Element = to && !disabled ? LinkedButton : Button;
  return (
    <Element
      to={to}
      onClick={disabled || clicked ? () => null : onClick}
      {...props}
      disabled={disabled || clicked}
      clicked={clicked}
    >
      {children}
    </Element>
  );
};

export default ButtonView;
