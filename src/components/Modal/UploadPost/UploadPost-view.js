import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import Loader from 'components/Loading';
import * as jss from './UploadPost-styles';

const UploadPost = ({
  onCancel,
  title,
  content,
  handleImageChange,
  previewUrl,
  fileRef,
  handleSubmit,
  loading,
}) => (
  <jss.UploadPostContainer
    as="form"
    className="modal-upload"
    method="POST"
    onSubmit={handleSubmit}
  >
    <jss.UploadPhotoContainer>
      {previewUrl ? <jss.PreviewImg src={previewUrl} /> : null}
      <jss.InputFileLabel htmlFor="uploadPhoto" />
      <jss.InputFile
        id="uploadPhoto"
        name="postImage"
        as="input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileRef}
      />
    </jss.UploadPhotoContainer>
    <jss.UploadContentContainer>
      <jss.InputContatiner>
        <jss.InputTitle onChange={title.onChange} />
        <span>제목</span>
      </jss.InputContatiner>
      <jss.InputContatiner type="textarea" onChange={content.onChange}>
        <jss.TextArea />
        <span>내용</span>
      </jss.InputContatiner>
      <jss.ButtonContainer>
        <Button type="submit">
          {/* <LoadingComponent modal /> */}
          확인
        </Button>
        <Button onClick={onCancel}>취소</Button>
      </jss.ButtonContainer>
    </jss.UploadContentContainer>
    {loading ? <Loader /> : null}
  </jss.UploadPostContainer>
);
UploadPost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  title: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  content: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  previewUrl: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

UploadPost.defaultProps = {
  previewUrl: undefined,
  loading: undefined,
};

export default UploadPost;
