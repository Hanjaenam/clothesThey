import React from 'react';
import PropTypes from 'prop-types';
import * as jss from './ErrorMessage-styles';

const ErrorMessageView = ({ message }) =>
  message ? (
    <jss.FailureContainer className="errorMessage">
      <span>{message}</span>
    </jss.FailureContainer>
  ) : null;

ErrorMessageView.propTypes = {
  message: PropTypes.string,
};

ErrorMessageView.defaultProps = {
  message: undefined,
};

export default ErrorMessageView;
