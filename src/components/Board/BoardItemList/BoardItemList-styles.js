import styled from 'styled-components';
import { hoverEffect, pairCss } from 'styles/mixins';

export const ItemContainer = styled.div`
  display: grid;
  /* display: none; */
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  min-width: ${props => `${props.theme.breakpoints.md}px`};
  padding: ${props => props.theme.GAP.SMALL} ${props => props.theme.GAP.REGULAR};
  height: ${props => props.theme.SIZE.BOARD.ITEM_LIST};
  border-bottom-left-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  border-bottom-right-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  align-items: center;
  /* top: 0; */
  left: 0;
  z-index: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  ${pairCss.inputButton('input')}
  height: 100%;
`;

export const SearchInput = styled.input`
  all: unset;
  flex: 1;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  width: ${props => props.theme.SIZE.BOARD.SEARCH_INPUT};
`;

export const Button = styled.button`
  all: unset;
  color: ${props => props.theme.NOT_FOCUSED};
  padding: 0 ${props => props.theme.GAP.REGULAR};
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  ${hoverEffect.button()};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Number = styled.p`
  cursor: pointer;
  padding: ${props => props.theme.GAP.SMALL};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  ${hoverEffect.button('black')};
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
`;

export const ButtonContainer = styled.div`
  justify-self: flex-end;
`;
