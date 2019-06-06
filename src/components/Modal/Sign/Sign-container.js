import React, { useContext, useState } from 'react';
import AppStore, { hideModalSign, logInUser } from 'components/App/App-store';
import ModalWrapper from 'components/Common/ModalWrapper';
import theme from 'styles/theme';
import { userLogIn, userRegister } from 'lib/api';
import { useApiStatus } from 'lib/hooks';
import ModalSignView from './Sign-view';
import { Input } from './Sign-styles';

const ModalSignContainer = () => {
  const appContext = useContext(AppStore);
  const title = appContext[0].getIn(['modal', 'sign', 'title']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [helpMsg, setHelpMsg] = useState(undefined);
  const { apiStatus, setApiStatus, initApiStatus } = useApiStatus();
  const isEmpty = (inputElement, msg) => {
    if (inputElement.value === '') {
      inputElement.setAttribute('placeholder-fix', false);
      inputElement.style.borderColor = theme.DANGER;
      inputElement.nextSibling.style.color = theme.DANGER;
      inputElement.focus();
      setHelpMsg(msg);
      return true;
    }
    inputElement.setAttribute('placeholder-fix', true);
    inputElement.style.borderColor = theme.SUCCESS;
    inputElement.nextSibling.style.color = theme.SUCCESS;
    setHelpMsg(null);
    return false;
  };

  // const emailRegexIsValid = inputElement => {
  //   const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //   if (inputElement.value.match(regex) === null) {
  //     inputElement.style.borderColor = theme.DANGER;
  //     inputElement.nextSibling.style.color = theme.DANGER;
  //     setHelpMsg('이메일을 올바르게 입력해주세요.');
  //   } else {
  //     setHelpMsg(null);
  //   }
  // };

  const isValidEmail = e => {
    const inputEmail = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[0];
    setEmail(inputEmail.value);
    if (isEmpty(inputEmail, '이메일을 입력해주세요')) return false;
    // emailRegexIsValid(e);
    return true;
  };

  // const pwdRegexIsValid = inputElement => {
  //   const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  //   if (inputElement.value.match(regex) === null) {
  //     inputElement.style.borderColor = theme.DANGER;
  //     inputElement.nextSibling.style.color = theme.DANGER;
  //     setHelpMsg('regex error');
  //   } else {
  //     setHelpMsg(null);
  //   }
  // };

  const isValidPassword = e => {
    const inputPassword = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[1];
    setPassword(inputPassword.value);
    if (isEmpty(inputPassword, '비밀번호를 입력해주세요')) return false;
    // pwdRegexIsValid(e);
    return true;
  };

  const isValidCPassword = e => {
    const inputCPassword = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[2];
    const inputPassword = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[1];
    setConfirmPassword(inputCPassword.value);
    if (
      isEmpty(inputCPassword, '비밀번호를 확인해주세요') ||
      inputPassword.value !== inputCPassword.value
    ) {
      inputCPassword.style.borderColor = theme.DANGER;
      inputCPassword.nextSibling.style.color = theme.DANGER;
      setHelpMsg('두 비밀번호가 다릅니다.');
      return false;
    }
    inputCPassword.style.borderColor = theme.SUCCESS;
    inputCPassword.nextSibling.style.color = theme.SUCCESS;
    setHelpMsg(null);
    return true;
  };

  const onMouseLeave = event => {
    event.target.classList.remove('focused');
  };

  const onMouseEnter = event => {
    event.target.classList.add('focused');
  };

  const onCancel = () => {
    if (apiStatus.loading) return;
    appContext[1](hideModalSign());
  };

  const isValid = e => {
    if (!isValidEmail(e) || !isValidPassword(e)) return false;
    if (title === '회원가입' && !isValidCPassword(e)) return false;
    return true;
  };
  const processApi = () => {
    if (title === '회원가입') {
      setApiStatus(s => ({ ...s, loading: true }));
      userRegister({
        email,
        password,
        confirmPassword,
      })
        .then(res => {
          setApiStatus(s => ({ ...s, loading: false }));
          appContext[1](logInUser(res.data));
        })
        .catch(res => {
          setApiStatus(s => ({ ...s, failure: true }));
          setHelpMsg('not match');
        })
        .finally(() => {
          initApiStatus();
          appContext[1](hideModalSign());
        });
    } else {
      setApiStatus(s => ({ failure: false, loading: true }));
      userLogIn({ email, password })
        .then(res => {
          setApiStatus(s => ({ failure: false, loading: false }));
          appContext[1](logInUser(res.data));
        })
        .catch((res, a) => {
          setApiStatus(s => ({ failure: true, loading: false }));
          setHelpMsg('not match');
        })
        .finally(() => {
          initApiStatus();
          appContext[1](hideModalSign());
        });
    }
  };
  const onKeyUpConfirm = e => {
    if (apiStatus.loading) return;
    if (e.keyCode === 13 && isValid(e)) {
      processApi();
    }
  };
  const onConfirm = e => {
    if (apiStatus.loading) return;
    if (appContext[0].get('user') === undefined && isValid(e)) {
      processApi();
    }
  };
  const isDisabled = () => {
    return title === '로그인'
      ? !(email && password)
      : !(email && password && confirmPassword);
  };

  return (
    <ModalWrapper
      visible={appContext[0].getIn(['modal', 'sign', 'visible'])}
      hideModal={() => appContext[1](hideModalSign())}
      loading={apiStatus.loading}
    >
      <ModalSignView
        title={title}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onCancel={onCancel}
        onConfirm={onConfirm}
        helpMsg={helpMsg}
        onEmailChange={isValidEmail}
        onPasswordChange={isValidPassword}
        onCPasswordChange={isValidCPassword}
        onKeyUpConfirm={onKeyUpConfirm}
        loading={apiStatus.loading}
        isDisabled={isDisabled}
      />
    </ModalWrapper>
  );
};

export default ModalSignContainer;
