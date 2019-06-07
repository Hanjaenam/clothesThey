import React from 'react';
import * as jss from './ErrorMessage-styles';

const FailureMessageView = ({ children }) =>
  children ? (
    <jss.FailureContainer className="error">
      <span>{children}</span>
    </jss.FailureContainer>
  ) : null;
export default FailureMessageView;
