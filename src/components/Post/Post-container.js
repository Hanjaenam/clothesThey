import React, { useContext } from 'react';
import Store from 'store';
import PropTypes from 'prop-types';
import PostView from './Post-view';

const PostContainer = ({
  id,
  imageSrc,
  title,
  content,
  likeNumber,
  commentNumber,
}) => {
  return (
    <PostView
      id={id}
      title={title}
      content={content}
      likeNumber={likeNumber}
      commentNumber={commentNumber}
      imageSrc={imageSrc}
      setUploadBoard={useContext(Store)}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likeNumber: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};

export default PostContainer;
