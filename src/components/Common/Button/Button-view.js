import React from 'react';
import * as jss from './Button-styles';

const Button = ({ children, ...props }) => (
  <jss.Button {...props}>
    <span>{children}</span>
  </jss.Button>
);

export default Button;
