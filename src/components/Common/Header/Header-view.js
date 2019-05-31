import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import * as jss from './Header-styles';

const HeaderView = ({ location, onClick }) => (
  <jss.Header pathname={location.pathname}>
    <jss.LogoContainer>
      <jss.Logo to="/">ClothesThey</jss.Logo>
    </jss.LogoContainer>
    <jss.CategoryContainer>
      <jss.Category to="/board/teenager">10대</jss.Category>
      <jss.Category to="/board/college">대학생</jss.Category>
      <jss.Category to="/board/ordinary">일반인</jss.Category>
      <jss.Category to="/board/free">자유</jss.Category>
    </jss.CategoryContainer>
    <jss.ButtonContainer className="header">
      <Button className="signin" onClick={() => onClick('로그인')}>
        로그인
      </Button>
      <Button className="signup" onClick={() => onClick('회원가입')}>
        회원가입
      </Button>
    </jss.ButtonContainer>
  </jss.Header>
);

HeaderView.propTypes = {
  location: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withRouter(HeaderView);
