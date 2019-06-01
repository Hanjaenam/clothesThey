import React, { useContext, useEffect } from 'react';
import Store from 'store';
import { showModalUploadBoard } from 'components/App/App-reducer';
import BoardItemListView from './BoardItemList-view';
import { ItemContainer } from './BoardItemList-styles';

const BoardItemListContainer = () => {
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
  const dispatch = useContext(Store);
  return (
    <BoardItemListView
      showModalUploadBoard={() => dispatch(showModalUploadBoard())}
    />
  );
};

export default BoardItemListContainer;
