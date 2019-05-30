import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
`;

export const BoardContainer = styled.section`
  margin-top: ${props =>
    `calc(${props.theme.GAP.SMALL} * 2 + ${
      props.theme.SIZE.BOARD.ITEM_CONTAINER
    })`};
`;
