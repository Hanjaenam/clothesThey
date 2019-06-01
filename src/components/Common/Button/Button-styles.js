import styled from 'styled-components';
import { hoverEffect } from 'styles/mixins';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  font-size: 1rem;
  margin: 0;
  background: white;
  padding: ${props => props.theme.GAP.SMALL};
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  ${hoverEffect.button()}
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  outline: none;
`;
