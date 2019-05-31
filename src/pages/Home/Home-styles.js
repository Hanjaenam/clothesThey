import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoint';

export const Container = styled.main`
  text-align: center;
  max-width: ${props => `${props.theme.breakpoints.xl}px`};
  ${breakpoints('xl')`margin:0 auto;`}
  position:relative;
  height: ${props => `calc(100vh - ${props.theme.SIZE.HOME_HEADER})`};
`;

export const ThumbnailContainer = styled.section`
  display: inline-grid;
`;

export const ScrollY = styled.div`
  overflow-y: scroll;
`;
