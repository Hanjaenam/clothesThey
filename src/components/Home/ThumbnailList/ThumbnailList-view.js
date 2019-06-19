import React from 'react';
import Thumbnail from 'components/Home/Thumbnail';
import testImg from 'assets/testImg.png';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Common/Button';
import * as jss from './ThumbnailList-styles';
import Loader from 'components/Loading';

const ThumbnailList = ({ category, LINK, data, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <jss.Container>
      {category === 'Weekly Best' ? (
        <jss.Title>Weekly Best</jss.Title>
      ) : (
        <Button to={`/board/${LINK[category]}`} noborder="true">
          {category}
        </Button>
      )}
      <jss.ThumbnailContainer category={category}>
        {category === 'Weekly Best' ? (
          <jss.LeftButton>
            <span>
              <FontAwesomeIcon icon={faChevronLeft} className="fa-2x" />
            </span>
          </jss.LeftButton>
        ) : null}
        <Thumbnail
          title="test"
          imageSrc={testImg}
          category={category}
          data={data[0]}
        />
        <Thumbnail
          title="test"
          imageSrc={testImg}
          category={category}
          data={data[1]}
        />
        <Thumbnail
          title="test"
          imageSrc={testImg}
          category={category}
          data={data[2]}
        />
        {category === 'Weekly Best' ? null : (
          <Thumbnail title="test" imageSrc={testImg} category={category} />
        )}
        {category === 'Weekly Best' ? (
          <jss.RightButton>
            <span>
              <FontAwesomeIcon icon={faChevronRight} className="fa-2x" />
            </span>
          </jss.RightButton>
        ) : null}
      </jss.ThumbnailContainer>
    </jss.Container>
  );

ThumbnailList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ThumbnailList;
