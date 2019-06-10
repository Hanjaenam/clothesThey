import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { addLikePost, deletePost as apiDeletePost } from 'lib/api';
import { useApiStatus } from 'lib/hooks';
import AppStore, { servePostData } from 'components/App/App-store';
import BoardStore from 'pages/Board/Board-store';
import PostListStore, {
  addLike,
  deletePost,
} from 'components/Board/PostList/PostList-store';
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
  creator,
  title,
  content,
  like,
  comments,
  imageUrl,
  createdAt,
}) => {
  const [isDelete, setDelete] = useState(false);
  const appContext = useContext(AppStore);
  const boardContext = useContext(BoardStore);
  const postListContext = useContext(PostListStore);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const {
    loading: likeLoading,
    failure: likeFailure,
    end: likeEnd,
  } = useApiStatus();
  const {
    loading: deleteLoading,
    failure: deleteFailure,
    end: deleteEnd,
  } = useApiStatus();
  const { visibleComment, onCommentClick } = useComment(false);
  const onLikeClick = () => {
    likeLoading(isDelete);
    addLikePost({ id })
      .then(res => {
        postListContext[1](
          addLike({
            postId: id,
            userId: appContext[0].getIn(['user', 'id']),
          }),
        );
      })
      .catch(err => {
        likeFailure(isDelete);
      })
      .finally(() => {
        likeEnd(isDelete);
      });
  };
  const onDeleteClick = () => {
    const key = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
    deleteLoading(isDelete);
    apiDeletePost({ id, key })
      .then(res => {
        setDelete(false);
        postListContext[1](deletePost(id));
      })
      .catch(err => {
        deleteFailure(isDelete);
      })
      .finally(() => {
        deleteEnd(isDelete);
      });
  };
  const onPatchClick = () => {
    appContext[1](servePostData({ title, content, previewUrl: imageUrl }));
  };
  return (
    <PostView
      id={id}
      creator={
        boardContext.category === 'me'
          ? appContext[0].getIn(['user', 'nickname'])
          : creator
      }
      title={title}
      content={content}
      like={like}
      comments={comments}
      imageUrl={imageUrl}
      createdAt={createdAt}
      visibleComment={visibleComment}
      onCommentClick={onCommentClick}
      onLikeClick={onLikeClick}
      user={appContext[0].get('user')}
      visibleEdit={visibleEdit}
      hideEdit={() => setVisibleEdit(false)}
      showEdit={() => setVisibleEdit(true)}
      category={boardContext.category}
      onDeleteClick={onDeleteClick}
      onPatchClick={onPatchClick}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  creator: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

PostContainer.defaultProps = {
  creator: undefined,
};

export default PostContainer;
