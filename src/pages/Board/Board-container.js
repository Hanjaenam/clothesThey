import React, { useEffect, useState } from 'react';
import { fromJS } from 'immutable';
import { readPost } from 'lib/api';
import Post from 'components/Board/Post';
import { useApiStatus } from 'lib/hooks';
import Store from './Board-store';
import BoardView from './Board-view';
import { GoToTheTop } from './Board-styles';

const usePost = (initialValue = []) => {
  const [postList, setPostList] = useState(initialValue);
  const addLike = id => {
    // postList[idx].like += 1;
  };
  const pushMapToComponent = arr => {
    setPostList(s => [
      ...s,
      ...arr.map(item => (
        <Post
          key={item._id}
          id={item._id}
          title={item.title}
          content={item.content}
          like={item.like}
          comments={item.comments.length}
          imageSrc={item.imageUrl}
          addLike={addLike}
        />
      )),
    ]);
  };
  const setMapToComponent = arr => {
    setPostList(s => [
      ...arr.map(item => (
        <Post
          key={item._id}
          id={item._id}
          title={item.title}
          content={item.content}
          like={item.like}
          comments={item.comments.length}
          imageSrc={item.imageUrl}
          addLike={addLike}
        />
      )),
    ]);
  };
  const clear = () => {
    setPostList(() => []);
  };
  const removeById = id => {
    const idx = postList.findIndex(post => post.id === id);
    setPostList(() => [...postList.slice(0, idx), ...postList.slice(idx + 1)]);
  };
  return {
    postList,
    pushMapToComponent,
    setMapToComponent,
    clear,
    removeById,
  };
};

const BoardContainer = ({ match }) => {
  const { postList, pushMapToComponent, setMapToComponent } = usePost();
  const [page, setPage] = useState(1);
  const { apiStatus, setApiStatus, initApiStatus } = useApiStatus();
  const setPosition = () => {
    if (document.body.clientWidth <= 1024) return;
    const goToTheTop = document.querySelector(
      `.${GoToTheTop.styledComponentId}`,
    );
    goToTheTop.style.left = `${(document.body.clientWidth - 768) / 2 -
      goToTheTop.offsetWidth -
      goToTheTop.offsetWidth / 2}px`;
  };
  const onClick = e => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setApiStatus(s => ({ ...s, loading: true }));
    readPost({ page, category: match.params.category })
      .then(res => {
        setApiStatus(s => ({ ...s, loading: false }));
        setMapToComponent(res.data);
      })
      .catch(err => {
        setApiStatus(s => ({ ...s, failure: true }));
      })
      .finally(() => {
        initApiStatus();
      });
  }, [match.params.category]);
  useEffect(() => {}, []);

  useEffect(() => {
    setPosition();
    window.addEventListener('resize', setPosition);
    return () => window.removeEventListener('resize', setPosition);
  });
  return (
    <Store.Provider value={{ category: match.params.category }}>
      <BoardView
        onClick={onClick}
        category={match.params.category}
        loading={apiStatus.loading}
      >
        {postList}
      </BoardView>
    </Store.Provider>
  );
};

export default BoardContainer;
