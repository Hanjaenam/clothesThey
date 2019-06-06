import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from 'components/Common/Header';
import HomePage from 'pages/Home';
import BoardPage from 'pages/Board';
import NotFoundPage from 'components/NotFound';
import UploadPostModal from 'components/Modal/UploadPost';
import SignModal from 'components/Modal/Sign';
import * as jss from './App-styles';

const AppView = () => {
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
      <UploadPostModal />
      <SignModal />
    </Router>
  );
};

export default AppView;
