import React from 'react';
import PropTypes from 'prop-types';
import * as jss from './Thumbnail-styles';

const ThumbnailView = ({ category, imageSrc, title, like, data }) => (
  <jss.ThumbnailContainer category={category}>
    <jss.ThumbnailImage src={data ? data.imageUrl : imageSrc} />
    <jss.ThumbnailTitle className="title">
      {data ? data.title : ''}
    </jss.ThumbnailTitle>
    <jss.ThumbnailLike className="like">
      {data ? data.like.length : ''}
    </jss.ThumbnailLike>
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
