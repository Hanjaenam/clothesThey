import { useState } from 'react';

export const useChange = (iniailValue = '') => {
  const [value, setValue] = useState(iniailValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange };
};
