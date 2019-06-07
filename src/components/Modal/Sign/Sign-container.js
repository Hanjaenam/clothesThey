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
  const [errorMsg, setErrorMsg] = useState(undefined);
  const { apiStatus, loading, failure, end } = useApiStatus();
  const isEmpty = (inputElement, msg) => {
    if (inputElement.value === '') {
      inputElement.setAttribute('placeholder-fix', false);
      inputElement.style.borderColor = theme.DANGER;
      inputElement.nextSibling.style.color = theme.DANGER;
      inputElement.focus();
      setErrorMsg(msg);
      return true;
    }
    inputElement.setAttribute('placeholder-fix', true);
    inputElement.style.borderColor = theme.SUCCESS;
    inputElement.nextSibling.style.color = theme.SUCCESS;
    setErrorMsg(null);
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
      setErrorMsg('두 비밀번호가 다릅니다.');
      return false;
    }
    inputCPassword.style.borderColor = theme.SUCCESS;
    inputCPassword.nextSibling.style.color = theme.SUCCESS;
    setErrorMsg(null);
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
    setErrorMsg(null);
  };

  const isValid = e => {
    if (!isValidEmail(e) || !isValidPassword(e)) return false;
    if (title === '회원가입' && !isValidCPassword(e)) return false;
    return true;
  };
  const errorEmail = () => {
    const inputEmail = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[0];
    inputEmail.style.borderColor = theme.DANGER;
    inputEmail.nextSibling.style.color = theme.DANGER;
    inputEmail.focus();
  };
  const errorPassword = () => {
    const inputPassword = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[1];
    inputPassword.style.borderColor = theme.DANGER;
    inputPassword.nextSibling.style.color = theme.DANGER;
    inputPassword.focus();
  };
  const errorCPassword = () => {
    const inputCPassword = document.querySelectorAll(
      `.${Input.styledComponentId}`,
    )[2];
    inputCPassword.style.borderColor = theme.DANGER;
    inputCPassword.nextSibling.style.color = theme.DANGER;
    inputCPassword.focus();
  };
  const processApi = () => {
    if (title === '로그인') {
      loading();
      userLogIn({ email, password })
        .then(res => {
          appContext[1](logInUser(res.data));
          appContext[1](hideModalSign());
        })
        .catch(err => {
          failure();
          if (err.response.data[0] === 'email') {
            errorEmail();
          } else if (err.response.data[0] === 'password') {
            errorPassword();
          }
          setErrorMsg(err.response.data[1]);
        })
        .finally(() => {
          end();
        });
    } else {
      loading();
      userRegister({
        email,
        password,
        confirmPassword,
      })
        .then(res => {
          appContext[1](logInUser(res.data));
          appContext[1](hideModalSign());
        })
        .catch(err => {
          failure();
          if (err.response.data[0] === 'email') {
            errorEmail();
          } else if (err.response.data[0] === 'password') {
            errorPassword();
          } else {
            errorCPassword();
          }
          setErrorMsg(err.response.data[1]);
        })
        .finally(() => {
          end();
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
        errorMsg={errorMsg}
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
