import styled, { css } from 'styled-components';
import { pairCss } from 'styles/mixins';
import breakpoints from 'styled-components-breakpoint';

export const ItemContainer = styled.div`
  /* display: grid; */
  display: none;
  grid-template-columns: auto 1fr auto;
  background-color: white;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  min-width: ${props => `${props.theme.breakpoints.md}px`};
  padding: 0 ${props => props.theme.GAP.SMALL};
  ${breakpoints('lg')`padding: 0 ${props => props.theme.GAP.REGULAR};`};
  height: ${props => props.theme.SIZE.BOARD.ITEM_LIST};
  border-bottom-left-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  border-bottom-right-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  ${pairCss.inputButton()}
  height: 90%;
`;

export const TextInput = styled.input`
  all: unset;
  /* flex: 1; */
  box-sizing: border-box;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  &:focus {
    width: ${props => props.theme.SIZE.BOARD.SEARCH_INPUT};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  justify-self: flex-end;
  button {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 0;
    }
    ${props =>
      props.category === 'me'
        ? css`
            &:nth-child(2) {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          `
        : css`
            &:nth-child(2) {
              border-radius: 0;
            }
            &:nth-child(3) {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left: 0;
            }
          `}
  }
`;
