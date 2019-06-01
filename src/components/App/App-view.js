import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderComponent from 'components/Common/Header';
import HomePresenter from 'pages/Home';
import BoardPresenter from 'pages/Board';
import UploadPost from 'components/Modal/UploadPost';
import ModalSign from 'components/Modal/Sign';
import Store from 'store';
import ModalWrapper from 'components/Common/ModalWrapper';
import {
  hideModalUploadBoard,
  hideModalSign,
} from 'components/App/App-reducer';
import * as jss from './App-styles';

const AppView = ({
  modalUploadBoardVisible,
  modalSignVisible,
  dispatch,
  signTitle,
}) => {
  return (
    <Router>
      <Store.Provider value={dispatch}>
        <jss.Container>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={HomePresenter} />
            <Route path="/board/:category" component={BoardPresenter} />
          </Switch>
        </jss.Container>
        <ModalWrapper
          visible={modalUploadBoardVisible}
          hideModal={() => dispatch(hideModalUploadBoard())}
        >
          <UploadPost />
        </ModalWrapper>
        <ModalWrapper
          visible={modalSignVisible}
          hideModal={() => dispatch(hideModalSign())}
        >
          <ModalSign title={signTitle} />
        </ModalWrapper>
      </Store.Provider>
    </Router>
  );
};

AppView.propTypes = {
  modalUploadBoardVisible: PropTypes.bool,
  modalSignVisible: PropTypes.bool,
  signTitle: PropTypes.string,
};

AppView.defaultProps = {
  modalUploadBoardVisible: false,
  modalSignVisible: false,
  signTitle: '',
};

export default AppView;
