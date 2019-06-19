import React, { useContext, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext, {
  hideModalUploadBoard,
  unshiftNewPost,
  clearPostData,
} from 'components/App/App-store';
import ModalWrapper from 'components/Common/ModalWrapper';
import { useChange, useApiStatus } from 'lib/hooks';
import { createPost, patchPost } from 'lib/api';
import theme from 'styles/theme';
import UploadView from './UploadPost-view';

const UploadContainer = ({ location }) => {
  const appContext = useContext(AppContext);
  const [previewUrl, setPreviewUrl] = useState('');
  const { apiStatus, loading, failure, end } = useApiStatus();
  const [errorMsg, setErrorMsg] = useState(undefined);
  const fileRef = useRef();
  const title = useChange();
  const content = useChange();
  const reader = new FileReader();
  const titleRef = useRef();
  const contentRef = useRef();
  const thumbnailRef = useRef();
  useEffect(() => {
    if (
      appContext[0].get('post') &&
      appContext[0].getIn(['post', 'type']) === 'patch'
    ) {
      setPreviewUrl(appContext[0].getIn(['post', 'previewUrl']));
      titleRef.current.value = appContext[0].getIn(['post', 'title']);
      titleRef.current.setAttribute('placeholder-fix', true);
      contentRef.current.value = appContext[0].getIn(['post', 'content']);
      contentRef.current.setAttribute('placeholder-fix', true);
    }
  }, [appContext[0].get('post')]);
  const handleImageChange = e => {
    e.preventDefault();
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
  const onCancel = () => {
    setPreviewUrl(null);
    if (appContext[0].get('post')) appContext[1](clearPostData());
    appContext[1](hideModalUploadBoard());
  };
  const isEmpty = () => {
    if (previewUrl && title.value && content.value) {
      setErrorMsg(undefined);
      return false;
    }
    if (!previewUrl) {
      setErrorMsg('사진을 선택해주세요.');
      thumbnailRef.current.style.borderColor = theme.DANGER;
    } else if (!title.value) {
      setErrorMsg('제목을 입력해주세요.');
      titleRef.current.style.borderColor = theme.DANGER;
      titleRef.current.nextSibling.style.color = theme.DANGER;
      titleRef.current.focus();
    } else if (!content.value) {
      setErrorMsg('내용을 입력해주세요.');
      contentRef.current.style.borderColor = theme.DANGER;
      contentRef.current.nextSibling.style.color = theme.DANGER;
      contentRef.current.focus();
    }
    return true;
  };
  const processCreateApi = () => {
    const formData = new FormData();
    // 이곳 이름도 server와 같게 해주어야 서버쪽에서 body data를 원활하게 받을 수 있다.
    // fileRef의 네임은 server와 같아야한다.
    formData.append('postImage', fileRef.current.files[0]);
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('category', getCategory());
    loading();
    createPost(formData)
      .then(res => {
        appContext[1](hideModalUploadBoard());
        appContext[1](
          unshiftNewPost({
            ...res.data,
            creator: {
              ...res.data.creator,
              nickname: appContext[0].getIn(['user', 'nickname']),
            },
          }),
        );
      })
      .catch(res => {
        failure();
      })
      .finally(() => {
        end();
      });
  };
  const isSame = () => {
    const {
      title: servedTitle,
      content: servedContent,
      previewUrl: servedPreviewUrl,
    } = appContext[0].get('post').toJS();
    // 최소 1개 이상은 달라야 수정 진행
    if (
      previewUrl.value !== servedPreviewUrl ||
      title !== servedTitle ||
      content.value !== servedContent
    )
      return false;
  };
  const processPatchApi = () => {
    if (isSame()) return;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty()) return;
    if (appContext[0].get('post')) processPatchApi();
    else processCreateApi();
  };
  return (
    <ModalWrapper
      visible={appContext[0].getIn(['modal', 'uploadBoard', 'visible'])}
      hideModal={() => appContext[1](hideModalUploadBoard())}
      loading={apiStatus.loading}
    >
      <UploadView
        onCancel={onCancel}
        title={title}
        content={content}
        handleImageChange={handleImageChange}
        previewUrl={previewUrl}
        fileRef={fileRef}
        handleSubmit={handleSubmit}
        loading={apiStatus.loading}
        titleRef={titleRef}
        contentRef={contentRef}
        thumbnailRef={thumbnailRef}
        errorMsg={errorMsg}
        servedData={appContext[0].get('post')}
      />
    </ModalWrapper>
  );
};

export default withRouter(UploadContainer);
