import React from 'react';
import ItemList from 'components/Board/BoardItemList';
import Post from 'components/Board/Post';
import testImg from 'assets/testImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';
import * as jss from './Board-styles';

const TITLE = {
  teenager: '10대',
  college: '대학생',
  ordinary: '일반인',
  free: '자유',
};

const BoardPresenterView = ({ onClick, category }) => {
  return (
    <>
      <Helmet>
        <title>{`${TITLE[category]}`}</title>
      </Helmet>
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
    </>
  );
};

export default BoardPresenterView;
