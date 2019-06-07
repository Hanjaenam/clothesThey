import React, { useEffect, useState, useContext } from 'react';
import AppStore from 'components/App/App-store';
import Store from './Board-store';
import BoardView from './Board-view';
import { GoToTheTop } from './Board-styles';

const BoardContainer = ({ match, history }) => {
  const appContext = useContext(AppStore);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
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
    setPosition();
    window.addEventListener('resize', setPosition);
    return () => window.removeEventListener('resize', setPosition);
  }, []);
  if (match.params.category === 'me' && !appContext[0].get('user')) {
    history.replace('/');
    return null;
  }
  return (
    <Store.Provider
      value={{
        category: match.params.category,
        currentPageNumber,
      }}
    >
      <BoardView onClick={onClick} category={match.params.category} />
    </Store.Provider>
  );
};

export default BoardContainer;
