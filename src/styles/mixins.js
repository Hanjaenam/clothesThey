import { css } from 'styled-components';
import theme from 'styles/theme';

export const marginX = size => css`
  margin: 0 ${props => props.theme.GAP[size]};
`;

export const marginY = size => css`
  margin: ${props => props.theme.GAP[size]} 0;
`;

export const paddingX = size => css`
  padding: 0 ${props => props.theme.GAP[size]};
`;

export const hoverEffect = {
  button: (color = theme.PRIMARY) => css`
    &:hover {
      color: white !important;
      background-color: ${color} !important;
    }
  `,
  shadow: (
    x = 0,
    y = 0,
    blurRadius = 4,
    spreadRadius = 1,
    color = 'rgba(0,0,0,.3)',
  ) =>
    css`
      &:hover {
        box-shadow: ${x}px ${y}px ${blurRadius}px ${spreadRadius}px ${color};
      }
      &:active {
        box-shadow: ${x}px ${y}px ${blurRadius}px ${spreadRadius}px ${color}
          inset;
      }
    `,
};

export const buttonCss = color => css`
  all: unset;
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  ${color ? hoverEffect.button(color) : hoverEffect.button()}
`;

// export const limitText = (lineHeight: number, lineNumber: number) => css`
//   overflow: hidden;
//   text-overflow: ellipsis; /* ... 처리 */
//   line-height: ${lineHeight};
//   height: ${() => `${lineHeight * lineNumber}em`};
//   word-wrap: break-word;
//   display: -webkit-box;
//   -webkit-line-clamp: ${lineNumber};
//   -webkit-box-orient: vertical;
// `;

export const pairCss = {
  inputButton: type => css`
    ${type} {
      border: 1px solid ${props => props.theme.NOT_FOCUSED};
      border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      &:focus {
        border: 1px solid ${props => props.theme.PRIMARY};
        & ~ button {
          border: 1px solid ${props => props.theme.PRIMARY};
          border-left: none;
          color: ${props => props.theme.PRIMARY};
        }
      }
    }
    button {
      border: 1px solid ${props => props.theme.NOT_FOCUSED};
      border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: none;
    }
  `,
};
