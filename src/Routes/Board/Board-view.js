import React from 'react';
import ItemList from 'components/BoardItemList';
import Post from 'components/Post';
import testImg from 'assets/testImg.png';
import * as jss from './Board-styles';

const BoardPresenterView = () => (
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
  </jss.Container>
);

export default BoardPresenterView;
