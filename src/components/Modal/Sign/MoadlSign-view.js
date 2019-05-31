import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import * as jss from './ModalSign-styles';

const ModalSign = ({
  title,
  onClick,
  onMouseLeave,
  onMouseEnter,
  nickname,
  password,
  confirmPassword,
}) => {
  return (
    <jss.Container onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <span>{title}</span>
      <jss.InputContainer>
        <jss.Input
          className="nickname"
          autoFocus
          required
          onChange={nickname.onChange}
        />
        <span className={nickname.value === '' ? null : 'hide'}>닉네임</span>
      </jss.InputContainer>
      <jss.InputContainer>
        <jss.Input required onChange={password.onChange} />
        <span className={password.value === '' ? null : 'hide'}>비밀번호</span>
      </jss.InputContainer>
      {title === '회원가입' ? (
        <jss.InputContainer>
          <jss.Input onChange={confirmPassword.onChange} required />
          <span className={confirmPassword.value === '' ? null : 'hide'}>
            비밀번호확인
          </span>
        </jss.InputContainer>
      ) : null}
      <jss.ButtonContainer className="sign">
        <Button>확인</Button>
        <Button onClick={onClick}>취소</Button>
      </jss.ButtonContainer>
    </jss.Container>
  );
};

ModalSign.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  nickname: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  confirmPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

ModalSign.defaultProps = {
  title: '',
  onClick: () => console.log('error'),
  onMouseLeave: () => console.log('error'),
  onMouseEnter: () => console.log('error'),
};
export default ModalSign;
