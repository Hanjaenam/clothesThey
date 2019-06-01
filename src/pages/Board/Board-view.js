import React from 'react';
import ItemList from 'components/Board/BoardItemList';
import Post from 'components/Board/Post';
import testImg from 'assets/testImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as jss from './Board-styles';

const BoardPresenterView = ({ onClick }) => (
  <jss.Container>
    <ItemList />
    <jss.BoardContainer>
      <Post
        id="1"
        title="testTitle"
        content="testcontent"
        likeNumber={12}
        commentNumber={23}
        imageSrc={testImg}
      />
      <Post
        id="1"
        title="testTitle"
        content="testcontent"
        likeNumber={12}
        commentNumber={23}
        imageSrc={testImg}
      />
      <Post
        id="1"
        title="testTitle"
        content="testcontent"
        likeNumber={12}
        commentNumber={23}
        imageSrc={testImg}
      />
      <Post
        id="1"
        title="testTitle"
        content="testcontent"
        likeNumber={12}
        commentNumber={23}
        imageSrc={testImg}
      />
    </jss.BoardContainer>
    <jss.GoToTheTop onClick={onClick}>
      <FontAwesomeIcon icon={faArrowUp} />
    </jss.GoToTheTop>
  </jss.Container>
);

BoardPresenterView.propTypes = {
  boardItemListPosition: PropTypes.string,
};

BoardPresenterView.defaultProps = {
  boardItemListPosition: undefined,
};

export default BoardPresenterView;
