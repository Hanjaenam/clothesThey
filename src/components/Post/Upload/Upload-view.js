import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as jss from '../Post-styles';

const UploadPost = ({ setUploadBoard }) => (
  <jss.UploadPostContainer>
    <jss.Container>
      <jss.CloseButton
        icon={faTimes}
        className="fa-2x"
        onClick={() => setUploadBoard(false)}
      />
      <jss.ThumbnailContainer>
        <jss.Thumbnail />
      </jss.ThumbnailContainer>
      <jss.ContentContainer>
        <jss.Title>uploadtitle</jss.Title>
        <jss.Content>uploadcontent</jss.Content>
      </jss.ContentContainer>
    </jss.Container>
  </jss.UploadPostContainer>
);
UploadPost.propTypes = {
  setUploadBoard: PropTypes.func.isRequired,
};

export default UploadPost;
