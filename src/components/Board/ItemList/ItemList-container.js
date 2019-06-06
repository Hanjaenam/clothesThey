import React, { useContext, useEffect } from 'react';
import BoardPageStore from 'pages/Board/Board-store';
import AppStore, { showModalUploadBoard } from 'components/App/App-store';
import ItemListView from './ItemList-view';
import { ItemContainer } from './ItemList-styles';

const ItemListContainer = () => {
  const appContext = useContext(AppStore);
  const boardPageContext = useContext(BoardPageStore);
  const setPosition = () => {
    const itemContainer = document.querySelector(
      `.${ItemContainer.styledComponentId}`,
    );
    if (window.scrollY < 45) {
      itemContainer.style.top = `${45 - window.scrollY}px`;
    } else if (window.scrollY >= 45) {
      itemContainer.style.top = '0px';
    } else if (window.scrollY <= 0) {
      itemContainer.style.top = '45px';
    }
  };
  const initPosition = () => {
    const itemContainer = document.querySelector(
      `.${ItemContainer.styledComponentId}`,
    );
    setPosition();
    itemContainer.style.display = 'grid';
  };
  useEffect(() => {
    initPosition();
    window.addEventListener('scroll', setPosition);
    return () => {
      window.removeEventListener('scroll', setPosition);
    };
  }, []);
  return (
    <ItemListView
      showModalUploadBoard={() => appContext[1](showModalUploadBoard())}
      category={boardPageContext.category}
      nickname={appContext[0].getIn(['user', 'nickname'])}
    />
  );
};

export default ItemListContainer;
