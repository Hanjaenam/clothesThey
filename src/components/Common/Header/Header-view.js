import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import { navLinkActiveStyle } from 'styles/mixins';
import EditUser from './EditUser';
import * as jss from './Header-styles';

const HeaderView = ({ location }) => (
  <jss.Header pathname={location.pathname}>
    <jss.LogoContainer>
      <Button exact to="/" noborder="true" activeStyle={navLinkActiveStyle}>
        ClothesThey
      </Button>
    </jss.LogoContainer>
    <jss.CategoryContainer>
      <Button
        to="/board/teenager"
        noborder="true"
        activeStyle={navLinkActiveStyle}
      >
        10대
      </Button>
      <Button
        to="/board/college"
        noborder="true"
        activeStyle={navLinkActiveStyle}
      >
        대학생
      </Button>
      <Button
        to="/board/ordinary"
        noborder="true"
        activeStyle={navLinkActiveStyle}
      >
        일반인
      </Button>
      <Button to="/board/free" noborder="true" activeStyle={navLinkActiveStyle}>
        자유
      </Button>
    </jss.CategoryContainer>
    <EditUser />
  </jss.Header>
);

HeaderView.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(HeaderView);

/**
 * Button 1 -> className: signin
 * Button 2 -> className: signup
 * ButtonContainer -> className: header
 */
