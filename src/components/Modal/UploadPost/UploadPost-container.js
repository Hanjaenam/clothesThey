import React, { useContext } from 'react';
import Store from 'store';
import { hideModalUploadBoard } from 'components/App/App-reducer';
import { useChange } from 'lib/hooks';
import UploadView from './UploadPost-view';

const UploadContainer = () => {
  const title = useChange();
  const content = useChange();
  const dispatch = useContext(Store);
  return (
    <UploadView
      hideModalUploadBoard={() => dispatch(hideModalUploadBoard())}
      title={title}
      content={content}
    />
  );
};

export default UploadContainer;
