import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderComponent from 'components/Common/Header';
import HomePresenter from 'pages/Home';
import BoardPresenter from 'pages/Board';
import UploadPost from 'components/Modal/UploadPost';
import ModalSign from 'components/Modal/Sign';
import Store from 'store';
import * as jss from './App-styles';

const AppView = ({ modalUploadBoard, modalSign, dispatch, signTitle }) => {
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
        {modalUploadBoard ? <UploadPost /> : null}
        {modalSign ? <ModalSign title={signTitle} /> : null}
      </Store.Provider>
    </Router>
  );
};

AppView.propTypes = {
  modalUploadBoard: PropTypes.bool,
  modalSign: PropTypes.bool,
  signTitle: PropTypes.string,
};

AppView.defaultProps = {
  modalUploadBoard: false,
  modalSign: false,
  signTitle: '',
};

export default AppView;
