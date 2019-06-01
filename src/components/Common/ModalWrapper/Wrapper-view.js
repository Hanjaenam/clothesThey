import React from 'react';
import * as jss from './Wrapper-styles';

const ModalWrapperView = ({ children, onClick, ...rest }) => (
  <jss.ModalWrapper onClick={onClick} {...rest}>
    {children}
  </jss.ModalWrapper>
);
export default ModalWrapperView;
