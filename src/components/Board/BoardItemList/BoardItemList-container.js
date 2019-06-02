import React, { useContext, useEffect } from 'react';
import AppContext, { showModalUploadBoard } from 'components/App/App-store';
import BoardItemListView from './BoardItemList-view';
import { ItemContainer } from './BoardItemList-styles';

const BoardItemListContainer = () => {
  const appContext = useContext(AppContext);
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
  const initiPosition = () => {
    const itemContainer = document.querySelector(
      `.${ItemContainer.styledComponentId}`,
    );
    setPosition();
    itemContainer.style.display = 'grid';
  };
  useEffect(() => {
    initiPosition();
    window.addEventListener('scroll', setPosition);
    return () => {
      window.removeEventListener('scroll', setPosition);
    };
  });
  return (
    <BoardItemListView
      showModalUploadBoard={() => appContext[1](showModalUploadBoard())}
    />
  );
};

export default BoardItemListContainer;
