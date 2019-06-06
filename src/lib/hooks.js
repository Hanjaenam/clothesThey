import { useState } from 'react';

export const useChange = (iniailValue = '') => {
  const [value, setValue] = useState(iniailValue);
  const onChange = e => {
    const { target } = e;
    setValue(target.value);
    if (target.value === '') {
      target.setAttribute('placeholder-fix', false);
    } else {
      target.setAttribute('placeholder-fix', true);
    }
  };
  return { value, onChange };
};

export const useApiStatus = (
  initialValue = {
    loading: false,
    failure: false,
  },
) => {
  const [apiStatus, setApiStatus] = useState(initialValue);
  const initApiStatus = () =>
    setApiStatus(() => ({
      loading: false,
      failure: false,
    }));
  const loading = () => {
    setApiStatus(s => ({ ...s, loading: true }));
  };
  const failure = () => {
    setApiStatus(s => ({ ...s, failure: true }));
  };
  const success = () => {
    setApiStatus(s => ({ ...s, loading: false }));
  };
  const end = () => {
    setApiStatus(() => ({
      loading: false,
      failure: false,
    }));
  };
  return {
    apiStatus,
    setApiStatus,
    initApiStatus,
    loading,
    failure,
    success,
    end,
  };
};
