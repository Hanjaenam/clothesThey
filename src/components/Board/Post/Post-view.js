import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComments,
  faEdit,
} from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CommentList from 'components/Board/CommentList';
// import LoadingComponent from 'components/Loading';
import Button from 'components/Common/Button';
import moment from 'moment';
import * as jss from './Post-styles';

const PostView = ({
  id,
  creator,
  title,
  content,
  like,
  comments,
  imageUrl,
  createdAt,
  visibleComment,
  onCommentClick,
  onLikeClick,
  user,
  visibleEdit,
  hideEdit,
  showEdit,
  category,
  onDeleteClick,
  onPatchClick,
}) => {
  return (
    <jss.Container>
      <jss.ThumbnailContainer>
        <jss.Thumbnail src={imageUrl} />
        {/* <LoadingComponent /> */}
      </jss.ThumbnailContainer>
      <jss.ContentContainer>
        <jss.Title>{title}</jss.Title>
        <jss.Content>{content}</jss.Content>
        <jss.ItemList>
          <jss.CreatorContainer>
            <jss.Creator>{creator}</jss.Creator>
            &nbsp;
            <jss.CreatedAt>{moment(createdAt).format('ll')}</jss.CreatedAt>
          </jss.CreatorContainer>
          <Button
            noborder
            onClick={onLikeClick}
            disabled={user === undefined}
            clicked={user && like.some(id => id === user.get('id'))}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{like.length}</span>
          </Button>
          <Button
            noborder
            visibleComment={visibleComment}
            onClick={onCommentClick}
          >
            <FontAwesomeIcon icon={faComments} />
            <span>{comments.length}</span>
          </Button>
        </jss.ItemList>
        {/* <LoadingComponent /> */}
      </jss.ContentContainer>
      {visibleComment ? <CommentList id={id} /> : null}
      {category === 'me' ? (
        <jss.EditContainer>
          {visibleEdit ? (
            <>
              <Button onClick={hideEdit}>
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
              <Button onClick={onDeleteClick}>삭제</Button>
              <Button onClick={onPatchClick}>수정</Button>
            </>
          ) : (
            <>
              <Button onClick={showEdit}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </>
          )}
        </jss.EditContainer>
      ) : null}
    </jss.Container>
  );
};

PostView.propTypes = {
  id: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleComment: PropTypes.bool.isRequired,
  onCommentClick: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
  visibleEdit: PropTypes.bool.isRequired,
  hideEdit: PropTypes.func.isRequired,
  showEdit: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onPatchClick: PropTypes.func.isRequired,
};

PostView.defaultProps = {
  user: undefined,
};

export default PostView;
