import React from 'react';
import ThumbnailList from 'components/Home/ThumbnailList';
import Helmet from 'react-helmet';
import * as jss from './Home-styles';

const HomeView = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <jss.ScrollY>
      <jss.Container>
        <ThumbnailList category="Weekly Best" />
        <jss.ThumbnailContainer>
          <ThumbnailList category="10대" />
          <ThumbnailList category="대학생" />
          <ThumbnailList category="일반인" />
          <ThumbnailList category="자유" />
        </jss.ThumbnailContainer>
      </jss.Container>
    </jss.ScrollY>
  </>
);

export default HomeView;
