import styled from 'styled-components';
import { focusedEffect, placeholderEffect } from 'styles/mixins';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${props => props.theme.GAP.LARGE};
  border-bottom-left-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  input {
    display: block;
  }
  background-color: white;
  text-align: center;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  > span {
    display: inline-block;
  }
  > span,
  > div {
    margin-bottom: ${props => props.theme.GAP.REGULAR};
  }
  > div:last-child {
    margin-bottom: 0;
  }
  z-index: 10;
`;

export const InputContainer = styled.div`
  ${placeholderEffect()}
`;

export const Input = styled.input`
  all: unset;
  text-align: left;
  padding: ${props => props.theme.GAP.REGULAR};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  ${focusedEffect()}
  &[value="2"] {
    background: black;
  }
`;

export const ButtonContainer = styled.div`
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  display: flex;
  button {
    border: none;
    border-radius: 0;
    &:first-child {
      border-right: 1px solid ${props => props.theme.PRIMARY};
    }
    flex: 1;
  }
`;
