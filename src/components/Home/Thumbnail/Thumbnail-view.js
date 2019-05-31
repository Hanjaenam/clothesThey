import React from 'react';
import PropTypes from 'prop-types';
import * as jss from './Thumbnail-styles';

const ThumbnailView = ({ category, imageSrc, title, like }) => (
  <jss.ThumbnailContainer category={category}>
    <jss.ThumbnailImage src={imageSrc} />
    <jss.ThumbnailTitle className="title">{title}</jss.ThumbnailTitle>
    <jss.ThumbnailLike className="like">{like}</jss.ThumbnailLike>
  </jss.ThumbnailContainer>
);

ThumbnailView.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  like: PropTypes.number,
  category: PropTypes.string.isRequired,
};

ThumbnailView.defaultProps = {
  imageSrc: undefined,
  like: 0,
};

export default ThumbnailView;
