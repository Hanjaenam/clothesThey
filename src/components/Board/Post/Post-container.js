import React, { useState } from 'react';
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
  title,
  content,
  likeNumber,
  commentNumber,
  imageSrc,
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
