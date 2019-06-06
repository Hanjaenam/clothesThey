import React from 'react';
import ItemList from 'components/Board/ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Loader from 'components/Loading';
import * as jss from './Board-styles';

const TITLE = {
  teenager: '10대',
  college: '대학생',
  ordinary: '일반인',
  free: '자유',
};

const BoardView = ({ children, onClick, category, loading }) => {
  return (
    <>
      <Helmet>
        <title>{`${TITLE[category]}`}</title>
      </Helmet>
      <jss.Container>
        <ItemList />
        <jss.BoardContainer>
          {children}
          {loading ? <Loader /> : null}
        </jss.BoardContainer>
        <jss.GoToTheTop onClick={onClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </jss.GoToTheTop>
      </jss.Container>
    </>
  );
};

BoardView.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default BoardView;
