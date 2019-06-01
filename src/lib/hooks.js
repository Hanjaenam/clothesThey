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
