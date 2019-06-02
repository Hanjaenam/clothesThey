import React, { useContext } from 'react';
import AppContext, { hideModalUploadBoard } from 'components/App/App-store';
import { useChange } from 'lib/hooks';
import UploadView from './UploadPost-view';

const UploadContainer = () => {
  const title = useChange();
  const content = useChange();
  const appContext = useContext(AppContext);
  return (
    <UploadView
      onCancel={() => appContext[1](hideModalUploadBoard())}
      title={title}
      content={content}
    />
  );
};

export default UploadContainer;
