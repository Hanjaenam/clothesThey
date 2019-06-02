import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments } from '@fortawesome/free-regular-svg-icons';
import CommentList from 'components/Board/CommentList';
import LoadingComponent from 'components/Loading';
import * as jss from './Post-styles';

const PostView = ({
  id,
  title,
  content,
  likeNumber,
  commentNumber,
  imageSrc,
  visibleComment,
  toggleVisibleComment,
}) => (
  <jss.Container>
    <jss.ThumbnailContainer>
      <jss.Thumbnail src={imageSrc} />
      {/* <LoadingComponent /> */}
    </jss.ThumbnailContainer>
    <jss.ContentContainer>
      <jss.Title>{title}</jss.Title>
      <jss.Content>{content}</jss.Content>
      <jss.ItemList>
        <jss.ItemButton>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{likeNumber}</span>
          </span>
        </jss.ItemButton>
        <jss.ItemButton
          visibleComment={visibleComment}
          onClick={() => toggleVisibleComment()}
        >
          <span>
            <FontAwesomeIcon icon={faComments} />
            <span>{commentNumber}</span>
          </span>
        </jss.ItemButton>
      </jss.ItemList>
      {/* <LoadingComponent /> */}
    </jss.ContentContainer>
    {visibleComment ? <CommentList id={id} /> : null}
  </jss.Container>
);

PostView.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likeNumber: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
  visibleComment: PropTypes.bool.isRequired,
  toggleVisibleComment: PropTypes.func.isRequired,
};

export default PostView;
