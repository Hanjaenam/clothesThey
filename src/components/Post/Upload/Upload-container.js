import React, { useContext } from 'react';
import Store from 'store';
import UploadView from './Upload-view';

const UploadContainer = () => {
  return <UploadView setUploadBoard={useContext(Store)} />;
};

export default UploadContainer;
