import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments } from '@fortawesome/free-regular-svg-icons';
import CommentList from 'components/Board/CommentList';
// import LoadingComponent from 'components/Loading';
import Button from 'components/Common/Button';
import * as jss from './Post-styles';

const PostView = ({
  id,
  title,
  content,
  like,
  comments,
  imageSrc,
  visibleComment,
  onCommentClick,
  onLikeClick,
  user,
}) => {
  return (
    <jss.Container>
      <jss.ThumbnailContainer>
        <jss.Thumbnail src={imageSrc} />
        {/* <LoadingComponent /> */}
      </jss.ThumbnailContainer>
      <jss.ContentContainer>
        <jss.Title>{title}</jss.Title>
        <jss.Content>{content}</jss.Content>
        <jss.ItemList>
          <Button
            noborder
            onClick={onLikeClick}
            disabled={user === undefined}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{like}</span>
          </Button>
          <Button
            noborder
            visibleComment={visibleComment}
            onClick={onCommentClick}
          >
            <FontAwesomeIcon icon={faComments} />
            <span>{comments}</span>
          </Button>
        </jss.ItemList>
        {/* <LoadingComponent /> */}
      </jss.ContentContainer>
      {visibleComment ? <CommentList id={id} /> : null}
    </jss.Container>
  );
};

PostView.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  visibleComment: PropTypes.bool.isRequired,
  onCommentClick: PropTypes.func.isRequired,
};

export default PostView;
