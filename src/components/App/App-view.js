import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from 'components/Common/Header';
import HomePage from 'pages/Home';
import BoardPage from 'pages/Board';
import NotFoundPage from 'components/NotFound';
import UploadPost from 'components/Modal/UploadPost';
import ModalSign from 'components/Modal/Sign';
import ModalWrapper from 'components/Common/ModalWrapper';
import PropTypes from 'prop-types';
import * as jss from './App-styles';

const AppView = ({ modalSign, modalUpload }) => {
  return (
    <Router>
      <jss.Container>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/board/:category" component={BoardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </jss.Container>
      <ModalWrapper
        visible={modalUpload.visible}
        hideModal={modalUpload.hideModal}
      >
        <UploadPost />
      </ModalWrapper>
      <ModalWrapper visible={modalSign.visible} hideModal={modalSign.hideModal}>
        <ModalSign />
      </ModalWrapper>
    </Router>
  );
};

AppView.propTypes = {
  modalSign: PropTypes.shape({}).isRequired,
  modalUpload: PropTypes.shape({}).isRequired,
};

export default AppView;
