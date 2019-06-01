import { css, keyframes } from 'styled-components';
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

export const navLinkActiveStyle = (color = theme.PRIMARY) => ({
  color: 'white',
  backgroundColor: color,
});

export const hoverEffect = {
  button: (color = theme.PRIMARY) => css`
    &:hover {
      ${navLinkActiveStyle(color)}
    }
    > span {
      transition: scale;
    }
    &:active > span {
      display: block;
      transform: scale(0.9);
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

export const focusedEffect = () => css`
  border: 1px solid ${props => props.theme.NOT_FOCUSED};
  &:focus {
    border: 1px solid ${props => props.theme.PRIMARY};
  }
`;

export const placeholderEffect = (type = 'input') => css`
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: ${props => props.theme.GAP.REGULAR};
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.5);
    font-weight: 100;
    font-size: ${props => props.theme.FONT_SIZE.HELP};
    transition: top ${props => props.theme.TRANSITION.REGULAR};
    pointer-events: none;
  }
  ${type}:not (:focus) {
    &[placeholder-fix='true'] ~ span {
      top: 0;
      background-color: white;
      color: black;
    }
  }
  ${type}:focus ~ span {
    color: black;
    font-weight: 500;
    top: 0;
    background-color: white;
  }
`;

export const pairCss = {
  inputButton: (type = 'input') => css`
    ${type} {
      ${focusedEffect()}
      border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      &:focus {
        & ~ button {
          border: 1px solid ${props => props.theme.PRIMARY};
          border-left: none;
          color: ${props => props.theme.PRIMARY};
        }
      }
    }
    button,
    input[type="button"] {
      border: 1px solid ${props => props.theme.NOT_FOCUSED};
      border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: none;
      &:hover {
        ${hoverEffect.button()}
      }
    }
  `,
};

export const modal = {
  fadeIn: css`
    animation: ${keyframes`
  0%{opacity:0;}
  100%{opacity:1;}
  `} 0.25s ease-in both;
  `,
  fadeOut: css`
    animation: ${keyframes`
  0%{opacity:1;}
  100%{opacity:0;}
  `} 0.25s ease-in both;
  `,
  slideUp: css`
    animation: ${keyframes`
  0%{transform:translateY(60%);}
  100%{transform:translateY(40%);}
  `} 0.25s ease-in both;
  `,
  slideDown: css`
    animation: ${keyframes`
  0%{transform:translateY(40%);}
  100%{transform:translateY(60%);}
  `} 0.25s ease-in both;
  `,
};
