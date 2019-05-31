import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button';
import * as jss from './UploadPost-styles';

const UploadPost = ({ hideModalUploadBoard, title, content }) => (
  <jss.ModalContainer>
    <jss.UploadPostContainer as="form">
      <jss.UploadPhotoContainer>
        <jss.InputFileLabel htmlFor="uploadPhoto" />
        <jss.InputFile
          id="uploadPhoto"
          as="input"
          type="file"
          accept="image/*"
        />
      </jss.UploadPhotoContainer>
      <jss.UploadContentContainer>
        <jss.InputContatiner>
          <jss.InputTitle onChange={title.onChange} />
          <span className={title.value === '' ? null : 'hide'}>제목</span>
        </jss.InputContatiner>
        <jss.InputContatiner type="textarea" onChange={content.onChange}>
          <jss.TextArea />
          <span className={content.value === '' ? null : 'hide'}>내용</span>
        </jss.InputContatiner>
        <jss.ButtonContainer>
          <Button>확인</Button>
          <Button onClick={hideModalUploadBoard}>취소</Button>
        </jss.ButtonContainer>
      </jss.UploadContentContainer>
    </jss.UploadPostContainer>
  </jss.ModalContainer>
);
UploadPost.propTypes = {
  hideModalUploadBoard: PropTypes.func.isRequired,
  title: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  content: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default UploadPost;