import React from 'react';
import Thumbnail from 'components/Home/Thumbnail';
import testImg from 'assets/testImg.png';
import PropTypes from 'prop-types';
import * as jss from './ThumbnailList-styles';

const ThumbnailList = ({ category, LINK }) => (
  <jss.Container>
    {category === 'Weekly Best' ? (
      <jss.Title>Weekly Best</jss.Title>
    ) : (
      <jss.LinkedTitle to={`/board/${LINK[category]}`}>
        {category}
      </jss.LinkedTitle>
    )}
    <jss.ThumbnailContainer category={category}>
      <Thumbnail title="test" imageSrc={testImg} category={category} />
      <Thumbnail title="test" imageSrc={testImg} category={category} />
      <Thumbnail title="test" imageSrc={testImg} category={category} />
      {category === 'Weekly Best' ? null : (
        <Thumbnail title="test" imageSrc={testImg} category={category} />
      )}
    </jss.ThumbnailContainer>
  </jss.Container>
);

ThumbnailList.propTypes = {
  category: PropTypes.string.isRequired,
  LINK: PropTypes.shape({}).isRequired,
};

export default ThumbnailList;
