import React from 'react';
import PropTypes from 'prop-types';
import * as jss from './Loading-styles';

const LoadingView = ({ modal }) => (
  <jss.Container modal={modal} className="loading">
    <jss.Item />
    <jss.Item />
    <jss.Item />
  </jss.Container>
);

LoadingView.propTypes = {
  modal: PropTypes.bool,
};

LoadingView.defaultProps = {
  modal: undefined,
};
export default LoadingView;
