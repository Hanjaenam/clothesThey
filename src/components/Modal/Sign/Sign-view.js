import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import Loader from 'components/Loading';
import * as jss from './Sign-styles';

const ModalSign = ({
  title,
  onCancel,
  onMouseLeave,
  onMouseEnter,
  onConfirm,
  helpMsg,
  onEmailChange,
  onPasswordChange,
  onCPasswordChange,
  onKeyUpConfirm,
  loading,
  isDisabled,
}) => {
  return (
    <jss.Container
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className="modal-sign"
    >
      <span>{title}</span>
      <jss.InputContainer>
        <jss.Input type="email" onChange={onEmailChange} autoFocus required />
        <span>이메일</span>
      </jss.InputContainer>
      <jss.InputContainer>
        <jss.Input
          type="password"
          onChange={onPasswordChange}
          onKeyUp={onKeyUpConfirm}
          required
        />
        <span>비밀번호</span>
      </jss.InputContainer>
      {title === '회원가입' ? (
        <jss.InputContainer>
          <jss.Input
            type="password"
            onChange={onCPasswordChange}
            onKeyUp={onKeyUpConfirm}
            required
          />
          <span>비밀번호확인</span>
        </jss.InputContainer>
      ) : null}
      <jss.ButtonContainer className="sign">
        <Button
          onClick={onConfirm}
          noborder
          loading={loading}
          disabled={isDisabled()}
        >
          {loading ? <Loader modal /> : '확인'}
        </Button>
        <Button onClick={onCancel} noborder>
          취소
        </Button>
      </jss.ButtonContainer>
      {helpMsg ? (
        <jss.HelpContainer>
          <span>{helpMsg}</span>
        </jss.HelpContainer>
      ) : null}
    </jss.Container>
  );
};

ModalSign.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  helpMsg: PropTypes.string,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onCPasswordChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

ModalSign.defaultProps = {
  title: '',
  helpMsg: null,
};
export default ModalSign;
