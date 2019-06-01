import React, { useContext, useState } from 'react';
import Store from 'store';
import PropTypes from 'prop-types';
import PostView from './Post-view';

const useComment = (initialValue = false) => {
  const [visibleComment, setVisibleComment] = useState(initialValue);
  const toggle = () => {
    setVisibleComment(!visibleComment);
  };
  return { visibleComment, toggle };
};

const PostContainer = ({
  id,
  imageSrc,
  title,
  content,
  likeNumber,
  commentNumber,
}) => {
  const { visibleComment, toggle: toggleVisibleComment } = useComment(false);
  return (
    <PostView
      id={id}
      title={title}
      content={content}
      likeNumber={likeNumber}
      commentNumber={commentNumber}
      imageSrc={imageSrc}
      setUploadBoard={useContext(Store)}
      visibleComment={visibleComment}
      toggleVisibleComment={toggleVisibleComment}
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
