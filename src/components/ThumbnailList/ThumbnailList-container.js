import React from 'react';
import ThumbnailListView from './ThumbnailList-view';

const LINK = {
  '10대': 'teenager',
  대학생: 'college',
  일반인: 'ordinary',
  자유: 'free',
};

const THumbnailListContainer = ({ category }) => {
  return <ThumbnailListView LINK={LINK} category={category} />;
};

export default THumbnailListContainer;
