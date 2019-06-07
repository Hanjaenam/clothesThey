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

export const useApiStatus = () => {
  const [apiStatus, setApiStatus] = useState({
    loading: false,
    success: false,
    failure: false,
  });
  const loading = (isActive = true) => {
    if (!isActive) return null;
    setApiStatus(s => ({ ...s, loading: true }));
  };
  const failure = (isActive = true) => {
    if (!isActive) return null;
    setApiStatus(s => ({ ...s, failure: true }));
  };
  const success = (isActive = true) => {
    if (!isActive) return null;
    setApiStatus(s => ({ ...s, success: true }));
  };
  const end = (isActive = true) => {
    if (!isActive) return null;
    setApiStatus(() => ({
      loading: false,
      success: false,
      failure: false,
    }));
  };
  return { apiStatus, loading, success, failure, end };
};
