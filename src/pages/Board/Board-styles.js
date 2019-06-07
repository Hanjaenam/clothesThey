import styled, { keyframes, css } from 'styled-components';
import breakpoints from 'styled-components-breakpoint';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.ALPHA};
`;

const top = keyframes`
50%{
  transform:translateY(-20%);
}
100%{
  transform:translateY(0);
}
`;
const topAnimation = css`
  animation: ${top} 1s ease-in infinite;
`;
export const GoToTheTop = styled.div`
  position: fixed;
  bottom: 1rem;
  @media screen and (max-width: 1024px) {
    /*
    1024px이상에서는 이 css 가 적용이 되지 않는다 -> 현재, inline style이 적용 되는 것
    1024px이하에서는 inline style과 겹쳐도 !important가 우선순위
    */
    left: 1rem !important;
  }
  svg {
    font-size: 2rem;
    ${breakpoints('md')`font-size:5vw;`}
    ${breakpoints('lg')`
    font-size:3rem;
    `}
    opacity:.5;
    cursor: pointer;
    transition: ${props => props.theme.TRANSITION.REGULAR};
    &:hover {
      ${topAnimation}
      opacity:1;
    }
  }
`;
