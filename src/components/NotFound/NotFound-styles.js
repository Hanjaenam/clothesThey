import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: relative;
  text-align: center;
  top: 15vh;
`;

export const Text = styled.p`
  padding: ${props => props.theme.GAP.MASSIVE};
  font-size: 1.5rem;
  font-weight: 500;
`;
