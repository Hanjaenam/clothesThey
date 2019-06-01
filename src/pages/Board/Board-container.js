import React, { useEffect } from 'react';
import BoardView from './Board-view';
import { GoToTheTop } from './Board-styles';

const BoardContainer = () => {
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
    window.removeEventListener('resize', setPosition);
  });
  return <BoardView onClick={onClick} />;
};

export default BoardContainer;
