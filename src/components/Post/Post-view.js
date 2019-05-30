import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments } from '@fortawesome/free-regular-svg-icons';
import * as jss from './Post-styles';

const PostView = ({
  id,
  title,
  content,
  likeNumber,
  commentNumber,
  imageSrc,
}) => (
  <jss.Container id={id}>
    <jss.ThumbnailContainer>
      <jss.Thumbnail src={imageSrc} />
    </jss.ThumbnailContainer>
    <jss.ContentContainer>
      <jss.Title>{title}</jss.Title>
      <jss.Content>{content}</jss.Content>
      <jss.ItemList>
        <jss.Item>
          <FontAwesomeIcon icon={faThumbsUp} />
          <jss.LikeNumber>{likeNumber}</jss.LikeNumber>
        </jss.Item>
        <jss.Item>
          <FontAwesomeIcon icon={faComments} />
          <jss.CommentNumber>{commentNumber}</jss.CommentNumber>
        </jss.Item>
      </jss.ItemList>
    </jss.ContentContainer>
  </jss.Container>
);

PostView.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likeNumber: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};

export default PostView;
