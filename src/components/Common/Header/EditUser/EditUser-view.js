import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import { activeStyle } from 'styles/mixins';
import Loader from 'components/Loading';
import * as jss from './EditUser-styles';

const EditUserView = ({
  user,
  loading,
  onLogOutClick,
  onShowSModalClick,
  onNickNameClick,
  clickedSetNickName,
  nickNameRef,
  onNickNameChange,
  onConfirmClick,
  onConfirmKeyUp,
  helpMsg,
}) => {
  if (user) {
    if (user.get('nickname')) {
      return (
        <jss.Container>
          <Button to="/board/me" activeStyle={activeStyle}>
            {user.get('nickname')}
          </Button>
          <Button onClick={onLogOutClick}>
            {loading ? <Loader modal /> : '로그아웃'}
          </Button>
        </jss.Container>
      );
    }
    return clickedSetNickName ? (
      <jss.InputContainer>
        {helpMsg ? (
          <jss.HelpContainer>
            <span>{helpMsg}</span>
          </jss.HelpContainer>
        ) : null}
        <jss.NickNameText
          autoFocus
          placeholder="닉네임을 설정해주세요"
          ref={nickNameRef}
          onChange={onNickNameChange}
          onKeyUp={onConfirmKeyUp}
        />
        <Button onClick={onConfirmClick} loading={loading}>
          {loading ? <Loader modal /> : '확인'}
        </Button>
      </jss.InputContainer>
    ) : (
      <jss.Container>
        <Button onClick={onNickNameClick}>
          {user.get('nickname') ? '내가 쓴 글' : '닉네임을 설정해주세요'}
        </Button>
        <Button onClick={onLogOutClick}>
          {loading ? <Loader modal /> : '로그아웃'}
        </Button>
      </jss.Container>
    );
  }
  return (
    <jss.Container>
      <Button onClick={() => onShowSModalClick('로그인')}>로그인</Button>
      <Button onClick={() => onShowSModalClick('회원가입')}>회원가입</Button>
    </jss.Container>
  );
};

EditUserView.propTypes = {
  loading: PropTypes.bool.isRequired,
  onShowSModalClick: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  onNickNameClick: PropTypes.func.isRequired,
  clickedSetNickName: PropTypes.bool.isRequired,
  onNickNameChange: PropTypes.func.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  onConfirmKeyUp: PropTypes.func.isRequired,
  helpMsg: PropTypes.string,
};
EditUserView.defaultProps = {
  helpMsg: null,
};

export default EditUserView;
