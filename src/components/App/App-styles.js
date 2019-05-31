import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  min-width: ${props => `${props.theme.breakpoints.md}px`};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
