import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  overflow: hidden;

  /* temp css */
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  &:first-child {
    margin-top: ${props => props.theme.GAP.SMALL};
  }
  /* temp css */
`;

export const Item = styled.p`
  padding: ${props => props.theme.GAP.SMALL};
  display: flex;
  align-items: center;
`;

export const Creator = styled(Item)`
  border-right: 2px solid white;
`;

export const Content = styled(Item)`
  border-right: 2px solid white;
  word-break: break-all;
`;

export const Date = styled(Item)`
  font-size: 0.7rem;
  padding: 0;
  font-style: italic;
`;

export const CCommentContainer = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: auto 1fr auto;
`;
