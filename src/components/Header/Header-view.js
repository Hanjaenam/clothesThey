import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as jss from './Header-styles';

const HeaderView = ({
  location,
  signTitle,
  signContainerMLeave,
  signContainerMEnter,
  buttonClick,
}) => (
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
      <jss.Button className="signin" onClick={buttonClick}>
        로그인
      </jss.Button>
      <jss.Button className="signup" onClick={buttonClick}>
        회원가입
      </jss.Button>
    </jss.ButtonContainer>
    <jss.SignContainer
      onMouseLeave={signContainerMLeave}
      onMouseEnter={signContainerMEnter}
    >
      <span>{signTitle}</span>
      <jss.InputContainer>
        <jss.Input className="nickname" required />
        <span>닉네임</span>
      </jss.InputContainer>
      <jss.InputContainer>
        {/* <jss.Input type="password" required /> */}
        <jss.Input required />
        <span>비밀번호</span>
      </jss.InputContainer>
      {signTitle === '회원가입' ? (
        <jss.InputContainer>
          {/* <jss.Input type="password" className="re-password" required /> */}
          <jss.Input required />
          <span>비밀번호확인</span>
        </jss.InputContainer>
      ) : null}
      <jss.ButtonContainer className="sign">
        {/* <jss.Button className="confirm">확인</jss.Button>
        <jss.Button className="cancle" onClick={buttonClick}>
          취소
        </jss.Button> */}
        <jss.Button>확인</jss.Button>
        <jss.Button onClick={buttonClick}>취소</jss.Button>
      </jss.ButtonContainer>
    </jss.SignContainer>
  </jss.Header>
);

HeaderView.propTypes = {
  location: PropTypes.shape({}).isRequired,
  signTitle: PropTypes.string.isRequired,
  signContainerMLeave: PropTypes.func.isRequired,
  signContainerMEnter: PropTypes.func.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default withRouter(HeaderView);
