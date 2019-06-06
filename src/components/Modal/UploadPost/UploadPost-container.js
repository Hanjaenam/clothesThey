import React, { useContext, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext, { hideModalUploadBoard } from 'components/App/App-store';
import ModalWrapper from 'components/Common/ModalWrapper';
import { useChange, useApiStatus } from 'lib/hooks';
import { createPost } from 'lib/api';
import UploadView from './UploadPost-view';

const UploadContainer = ({ location }) => {
  const appContext = useContext(AppContext);
  const [previewUrl, setPreviewUrl] = useState('');
  const { apiStatus, setApiStatus, initApiStatus } = useApiStatus();
  const fileRef = useRef();
  const title = useChange();
  const content = useChange();
  const handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const getCategory = () => {
    const categoris = [
      '/board/teenager',
      '/board/college',
      '/board/ordinary',
      '/board/free',
    ];
    const idx = categoris.findIndex(category =>
      location.pathname.includes(category),
    );
    return categoris[idx].substr(7);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    // 이곳 이름도 server와 같게 해주어야 서버쪽에서 body data를 원활하게 받을 수 있다.
    // fileRef의 네임은 server와 같아야한다.
    formData.append('postImage', fileRef.current.files[0]);
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('category', getCategory());
    setApiStatus(s => ({ ...s, loading: true }));
    createPost(formData)
      .then(res => {
        setApiStatus(s => ({ ...s, loading: false }));
      })
      .catch(res => {
        setApiStatus(s => ({ ...s, failure: true }));
      })
      .finally(() => {
        appContext[1](hideModalUploadBoard());
        initApiStatus();
      });
  };
  return (
    <ModalWrapper
      visible={appContext[0].getIn(['modal', 'uploadBoard', 'visible'])}
      hideModal={() => appContext[1](hideModalUploadBoard())}
      loading={apiStatus.loading}
    >
      <UploadView
        onCancel={() => appContext[1](hideModalUploadBoard())}
        title={title}
        content={content}
        handleImageChange={handleImageChange}
        previewUrl={previewUrl}
        fileRef={fileRef}
        handleSubmit={handleSubmit}
        loading={apiStatus.loading}
      />
    </ModalWrapper>
  );
};

export default withRouter(UploadContainer);
