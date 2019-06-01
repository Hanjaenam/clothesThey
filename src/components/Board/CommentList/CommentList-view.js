import React from 'react';
import Comment from 'components/Board/Comment';
import Button from 'components/Common/Button';
import * as jss from './CommentList-styles';

const CommentList = () => (
  <jss.Container>
    <Comment />
    <Comment />
    <Comment />
    <jss.FormContainer>
      <jss.TextArea />
      <Button>확인</Button>
    </jss.FormContainer>
  </jss.Container>
);
export default CommentList;
