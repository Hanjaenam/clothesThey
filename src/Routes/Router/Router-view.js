import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderComponent from 'components/Header';
import HomePresenter from 'Routes/Home';
import BoardPresenter from 'Routes/Board';
import UploadPost from 'components/Post/Upload';
import * as jss from './Router-styles';

const RouterView = ({ Store, showUploadBoard, setUploadBoard }) => {
  return (
    <Router>
      <Store.Provider value={setUploadBoard}>
        <jss.Container>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={HomePresenter} />
            <Route path="/board/:category" component={BoardPresenter} />
          </Switch>
        </jss.Container>
        {showUploadBoard ? <UploadPost /> : null}
      </Store.Provider>
    </Router>
  );
};

RouterView.propTypes = {
  Store: PropTypes.shape({}).isRequired,
  showUploadBoard: PropTypes.oneOf([true, false, null]),
};
RouterView.defaultProps = {
  showUploadBoard: undefined,
};

export default RouterView;
