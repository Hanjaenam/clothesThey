import React from 'react';
import * as jss from './Comment-styles';

const CommentView = () => (
  <jss.Container>
    <jss.Creator>재남</jss.Creator>
    <jss.Content>
      ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
    </jss.Content>
    <jss.Date>18/11/27</jss.Date>
    <jss.CCommentContainer>
      <jss.Creator>가람</jss.Creator>
      <jss.Content>
        ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
      </jss.Content>
      <jss.Date>18/11/27</jss.Date>
    </jss.CCommentContainer>
  </jss.Container>
);
export default CommentView;
