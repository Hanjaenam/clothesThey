import styled from 'styled-components';
import { hoverEffect, pairCss } from 'styles/mixins';

export const ItemContainer = styled.div`
  /* display: grid; */
  display: none;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  min-width: ${props => `${props.theme.breakpoints.md}px`};
  padding: ${props => props.theme.GAP.SMALL} ${props =>
  props.theme.GAP.REGULAR};
  /* height: ${props => props.theme.SIZE.BOARD.ITEM_CONTAINER}; */
  border-bottom-left-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  border-bottom-right-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  left: 0;
  z-index: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  ${pairCss.inputButton('input')}
`;

export const SearchInput = styled.input`
  all: unset;
  flex: 1;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  transition: ${props => props.theme.TRANSITION.REGULAR};
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

export const UploadButton = styled.button`
  all: unset;
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  ${hoverEffect.button()}
  justify-self:flex-end;
  padding: 0 ${props => props.theme.GAP.REGULAR};
`;
