import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { addLikePost } from 'lib/api';
import AppStore from 'components/App/App-store';
import { useApiStatus } from 'lib/hooks';
import PostView from './Post-view';

const useComment = (initialValue = false) => {
  const [visibleComment, setVisibleComment] = useState(initialValue);
  const onCommentClick = () => {
    setVisibleComment(!visibleComment);
  };
  return { visibleComment, onCommentClick };
};

const PostContainer = ({
  id,
  title,
  content,
  like,
  comments,
  imageSrc,
  addLike,
}) => {
  const appContext = useContext(AppStore);
  const { loading, failure, success, end } = useApiStatus();
  const onLikeClick = () => {
    addLike(id);
    // loading();
    // addLikePost({ id })
    //   .then(res => {
    //     success();
    //     addLike(id);
    //   })
    //   .catch(err => {
    //     failure();
    //   })
    //   .finally(() => {
    //     end();
    //   });
  };
  const { visibleComment, onCommentClick } = useComment(false);
  return (
    <PostView
      id={id}
      title={title}
      content={content}
      like={like}
      comments={comments}
      imageSrc={imageSrc}
      visibleComment={visibleComment}
      onCommentClick={onCommentClick}
      onLikeClick={onLikeClick}
      user={appContext[0].get('user')}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

export default PostContainer;
