import React from 'react';
import PropTypes from 'prop-types';
import ButtonView from './Button-view';

const ButtonContainer = ({ children, ...props }) => {
  return <ButtonView {...props}>{children}</ButtonView>;
};

export default ButtonContainer;
