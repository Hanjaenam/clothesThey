import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { hoverEffect, buttonCss } from 'styles/mixins';

export const Header = styled.header`
  min-height: ${props => props.theme.SIZE.HOME_HEADER};
  /* background-color: white; */
  ${props =>
    props.pathname.includes('board')
      ? css`
          min-height: ${props.theme.SIZE.BOARD.HEADER};
        `
      : null}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  justify-self: flex-start;
`;

export const Logo = styled(NavLink)`
  all: unset;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  padding: ${props => props.theme.GAP.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  cursor: pointer;
  ${hoverEffect.button()}
`;

export const CategoryContainer = styled.nav`
  display: flex;
  justify-self: center;
`;

export const Category = styled(NavLink)`
  all: unset;
  display: block;
  padding: ${props => props.theme.GAP.REGULAR};
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  ${hoverEffect.button()}
`;

export const ButtonContainer = styled.div`
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  button {
    padding: ${props => props.theme.GAP.SMALL};
  }
  &.header {
    display: flex;
    justify-self: flex-end;
  }
  &.sign {
    display: inline-block;
  }
`;

export const Button = styled.button`
  ${buttonCss()};
  &:nth-child(2) {
    border-left: 1px solid black;
  }
`;
export const SignContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${props => props.theme.GAP.LARGE};
  border-bottom-left-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  transform: translateY(-100%);
  input {
    display: block;
  }
  background-color: white;
  text-align: center;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  &.show {
    transform: translateY(0);
  }
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

export const Input = styled.input`
  all: unset;
  text-align: left;
  padding: ${props => props.theme.GAP.REGULAR};
`;

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  span {
    position: absolute;
    top: 50%;
    left: ${props => props.theme.GAP.REGULAR};
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-size: ${props => props.theme.FONT_SIZE.HELP};
    transition: ${props => props.theme.TRANSITION.REGULAR};
    pointer-events: none;
  }
  input:focus ~ span {
    color: black;
    font-weight: 500;
    top: 0;
    background-color: white;
  }
`;
