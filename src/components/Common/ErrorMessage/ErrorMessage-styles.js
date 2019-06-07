import styled from 'styled-components';

export const FailureContainer = styled.div`
  margin: 0 auto;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  background-color: ${props => props.theme.DANGER};
  color: white;
  padding: ${props => props.theme.GAP.REGULAR};
  span {
    word-break: break-all;
    font-size: ${props => props.theme.FONT_SIZE.HELP};
  }
`;
