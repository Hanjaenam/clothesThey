import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThumbnailListView from './ThumbnailList-view';
import { readPost } from 'lib/api';

const LINK = {
  '10대': 'teenager',
  대학생: 'college',
  일반인: 'ordinary',
  자유: 'free',
};

const THumbnailListContainer = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  if (loading) {
    readPost({ category: LINK[category] })
      .then(res => {
        setData(() => res.data);
        setLoading(false);
      })
      .catch(err => {})
      .finally(() => {});
  }
  return (
    <ThumbnailListView
      category={category}
      LINK={LINK}
      data={data}
      loading={loading}
    />
  );
};

THumbnailListContainer.propTypes = {
  category: PropTypes.string.isRequired,
};

export default THumbnailListContainer;
