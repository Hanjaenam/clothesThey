import React, { useContext, useState, useRef } from 'react';
import AppContext, {
  showModalSign,
  setModalSignTitle,
  logOutUser,
  setUser,
} from 'components/App/App-store';
import { userLogOut, userPatch } from 'lib/api';
import theme from 'styles/theme';
import { useApiStatus } from 'lib/hooks';
import EditUserView from './EditUser-view';

const EditUserContainer = () => {
  const appContext = useContext(AppContext);
  // const [failure, setFailure] = useState(false);
  const [clickedSetNickName, setClicked] = useState(false);
  const [helpMsg, setHelpMsg] = useState(null);
  const { apiStatus, loading, failure, end } = useApiStatus();
  const nickNameRef = useRef();
  const onLogOutClick = () => {
    loading();
    userLogOut()
      .then(res => {
        appContext[1](logOutUser());
      })
      .catch(err => failure())
      .finally(() => end());
  };
  const onShowSModalClick = title => {
    appContext[1](showModalSign());
    appContext[1](setModalSignTitle(title));
  };
  const onNickNameClick = () => setClicked(true);
  const isEmpty = () => {
    if (nickNameRef.current.value === '') {
      nickNameRef.current.style.borderColor = theme.DANGER;
      setHelpMsg('닉네임을 입력해주세요');
      return true;
    }
    nickNameRef.current.style.borderColor = theme.SUCCESS;
    setHelpMsg(null);
    return false;
  };
  const isLongLength = () => {
    if (nickNameRef.current.value.length > 30) {
      nickNameRef.current.style.borderColor = theme.DANGER;
      setHelpMsg('닉네임이 너무 깁니다.');
      return true;
    }
    nickNameRef.current.style.borderColor = theme.SUCCESS;
    setHelpMsg(null);
    return false;
  };
  const isValidNickName = () => {
    if (isEmpty()) return false;
    if (isLongLength()) return false;
    return true;
  };
  const isValid = () => {
    if (!isValidNickName()) return false;
    setHelpMsg(null);
    return true;
  };
  const processApi = () => {
    const nickname = nickNameRef.current.value;
    loading();
    userPatch({ nickname })
      .then(res => {
        appContext[1](setUser({ nickname }));
      })
      .catch(err => failure())
      .finally(() => end());
  };
  const onConfirmClick = e => {
    if (!isValid(e)) return;
    processApi();
  };
  const onConfirmKeyUp = e => {
    if (e.keyCode === 13 && isValid()) processApi();
  };
  return (
    <EditUserView
      onShowSModalClick={onShowSModalClick}
      onLogOutClick={onLogOutClick}
      onNickNameClick={onNickNameClick}
      clickedSetNickName={clickedSetNickName}
      user={appContext[0].get('user')}
      nickNameRef={nickNameRef}
      onNickNameChange={isValidNickName}
      onConfirmClick={onConfirmClick}
      helpMsg={helpMsg}
      onConfirmKeyUp={onConfirmKeyUp}
      loading={apiStatus.loading}
    />
  );
};

export default EditUserContainer;
