import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PostListContainer = styled.section`
  margin-top: ${props => `calc( ${props.theme.SIZE.BOARD.ITEM_LIST})`};
  .loading {
    margin: ${props => props.theme.GAP.MASSIVE} 0;
  }
`;
