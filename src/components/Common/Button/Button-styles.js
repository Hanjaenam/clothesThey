import styled, { css } from 'styled-components';
import { hoverEffect } from 'styles/mixins';
import { NavLink } from 'react-router-dom';

export const buttonCss = noborder => css`
  font-size: 1rem;
  margin: 0;
  background: white;
  padding: ${props => props.theme.GAP.SMALL};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border: ${props =>
    noborder === true || noborder === 'noborder' || noborder === 'true'
      ? `none`
      : `1px solid ${props.theme.ALPHA}`};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  outline: none;
  /* ${props =>
    props.notFocused
      ? css`
          color: ${props => props.theme.NOT_FOCUSED};
        `
      : null} */
  ${props =>
    props.disabled || props.loading
      ? css`
          background: ${props.theme.ALPHA};
          ${props.loading === 'true' ? 'cursor:wait' : null}
        `
      : css`
          cursor: pointer;
          ${hoverEffect.button({ noborder })}
        `}
  ${props =>
    props.clicked
      ? css`
          background: ${props.theme.PRIMARY} !important;
          color: white;
        `
      : null}
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  ${props => buttonCss(props.noborder)}
  ${props => props.activeStyle}
`;

export const LinkedButton = styled(NavLink)`
  ${props => buttonCss(props.noborder)}
  text-decoration:none;
  color: ${props => props.theme.TEXT};
`;
