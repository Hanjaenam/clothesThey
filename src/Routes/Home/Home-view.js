import React from 'react';
import ThumbnailList from 'components/ThumbnailList';
import * as jss from './Home-styles';

const HomePresenterView = () => (
  <jss.Container>
    <ThumbnailList category="Weekly Best" />
    <jss.ThumbnailContainer>
      <ThumbnailList category="10대" />
      <ThumbnailList category="대학생" />
      <ThumbnailList category="일반인" />
      <ThumbnailList category="자유" />
    </jss.ThumbnailContainer>
  </jss.Container>
);

export default HomePresenterView;
