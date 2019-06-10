import React, { useEffect, useReducer, useContext } from 'react';
import Post from 'components/Board/Post';
import { readPost } from 'lib/api';
import { useApiStatus } from 'lib/hooks';
import BoardPageStore from 'pages/Board/Board-store';
import AppStore from 'components/App/App-store';
import Loader from 'components/Loading';
import PostListView from './PostList-view';
import PostStore, {
  initialState,
  reducer,
  initializePost,
  unshiftPost,
} from './PostList-store';

const PostList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { apiStatus, loading, failure, end } = useApiStatus();
  const appContext = useContext(AppStore);
  const boardContext = useContext(BoardPageStore);

  useEffect(() => {
    loading();
    readPost({
      page: boardContext.currentPageNumber,
      category: boardContext.category,
    })
      .then(res => {
        dispatch(initializePost(res.data));
      })
      .catch(err => {
        failure();
      })
      .finally(() => end());
  }, [boardContext.category]);

  useEffect(() => {
    if (
      appContext[0].get('post') &&
      appContext[0].getIn(['post', 'type']) === 'new'
    ) {
      dispatch(unshiftPost(appContext[0].get('post')));
    }
  }, [appContext[0].get('post')]);

  const postComponents = () => {
    const postData = state
      .toJS()
      .map(data => (
        <Post
          key={data._id}
          id={data._id}
          creator={data.creator.nickname}
          title={data.title}
          content={data.content}
          like={data.like}
          comments={data.comments}
          imageUrl={data.imageUrl}
          createdAt={data.createdAt}
        />
      ));
    return postData;
  };
  return (
    <PostStore.Provider value={[state, dispatch]}>
      <PostListView loading={apiStatus.loading}>
        {postComponents()}
        {apiStatus.loading ? <Loader /> : null}
      </PostListView>
    </PostStore.Provider>
  );
};
export default PostList;
