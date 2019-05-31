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
    if (window.scrollY > 0 && window.scrollY < 45) {
      itemContainer.style.top = `${45 - window.scrollY}px`;
    } else if (window.scrollY >= 45) {
      itemContainer.style.top = '0px';
    } else if (window.scrollY <= 0) {
      itemContainer.style.top = '45px';
    }
    itemContainer.style.display = 'grid';
  };
  const scrollHandler = event => {
    const { currentTarget } = event;
    const itemContainer = document.querySelector(
      `.${ItemContainer.styledComponentId}`,
    );
    if (currentTarget.scrollY > 0 && currentTarget.scrollY < 45) {
      itemContainer.style.top = `${45 - currentTarget.scrollY}px`;
    } else if (currentTarget.scrollY >= 45) {
      itemContainer.style.top = '0px';
    } else if (currentTarget.scrollY <= 0) {
      itemContainer.style.top = '45px';
    }
  };
  useEffect(() => {
    setPosition();
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
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
