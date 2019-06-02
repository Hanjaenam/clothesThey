import styled, { keyframes, css } from 'styled-components';

const loadingAnimation = keyframes`
  25% {
    transform: scaleY(0.6);
  }
  50% {
    transform: scaleY(1);
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    ${props =>
      props.modal
        ? css`
            width: 0.3rem;
            height: 1rem;
          `
        : css`
            height: 40px;
            width: 10px;
          `}
  }
`;
export const Item = styled.div`
  background: ${props => props.theme.PRIMARY};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  transform-origin: center;
  & + & {
    margin-left: ${props => props.theme.GAP.SMALL};
  }
  ${css`
    animation: ${loadingAnimation} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
      infinite;
  `}
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
