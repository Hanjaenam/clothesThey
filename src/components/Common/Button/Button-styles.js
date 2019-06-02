import styled, { css } from 'styled-components';
import { hoverEffect } from 'styles/mixins';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  font-size: 1rem;
  margin: 0;
  background: white;
  padding: ${props => props.theme.GAP.SMALL};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  outline: none;
  ${props =>
    props.disabled
      ? null
      : css`
          cursor: pointer;
          ${hoverEffect.button()}
        `}
`;
