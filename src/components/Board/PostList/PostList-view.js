import React from 'react';
import * as jss from './PostList-styles';

const PostListView = ({ children }) => (
  <jss.PostListContainer>{children}</jss.PostListContainer>
);
export default PostListView;
