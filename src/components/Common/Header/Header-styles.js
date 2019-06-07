import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { activeStyle } from 'styles/mixins';
import { buttonCss } from 'components/Common/Button/Button-styles';

export const Header = styled.header`
  min-height: ${props => props.theme.SIZE.HOME_HEADER};
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
  a {
    font-size: ${props => props.theme.FONT_SIZE.TITLE};
  }
`;

export const Logo = styled(NavLink)`
  color: ${props => props.theme.TEXT};
  text-decoration: none;
  ${buttonCss(false)}
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
`;

export const CategoryContainer = styled.nav`
  display: flex;
  justify-self: center;
`;

export const Category = styled(NavLink).attrs(() => ({
  activeStyle,
}))`
  text-decoration: none;
  display: block;
  color: ${props => props.theme.TEXT};
  ${buttonCss(false)};
`;

export const ButtonContainer = styled.div`
  justify-self: flex-end;
  button:first-child,
  a:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:nth-child(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const NickName = styled.span`
  display: inline-block;
  margin-right: ${props => props.theme.GAP.SMALL};
`;
