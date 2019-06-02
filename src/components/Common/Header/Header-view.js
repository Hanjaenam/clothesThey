import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import * as jss from './Header-styles';

const HeaderView = ({ location, onClick, user }) => (
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
    <jss.ButtonContainer>
      {user === undefined ? (
        <>
          <Button onClick={() => onClick('로그인')}>로그인</Button>
          <Button onClick={() => onClick('회원가입')}>회원가입</Button>
        </>
      ) : (
        <>
          <jss.NickName>{user.get('nickname')}</jss.NickName>
          <Button>내가 쓴 글</Button>
        </>
      )}
    </jss.ButtonContainer>
  </jss.Header>
);

HeaderView.propTypes = {
  location: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withRouter(HeaderView);

/**
 * Button 1 -> className: signin
 * Button 2 -> className: signup
 * ButtonContainer -> className: header
 */
