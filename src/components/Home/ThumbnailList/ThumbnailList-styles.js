import styled from 'styled-components';
import { buttonCss } from 'components/Common/Button/Button-styles';

export const Container = styled.article`
  margin: ${props => props.theme.GAP.REGULAR} 0;
  &:first-child {
    margin-top: 0;
  }
  > a {
    display: block;
  }
`;

export const Title = styled.p`
  all: unset;
  display: block;
  padding: ${props => props.theme.GAP.SMALL};
  margin: ${props => props.theme.GAP.SMALL} 0;
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
  user-select: none;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArrowButton = styled.button`
  ${buttonCss('noborder')}
  box-sizing: border-box;
  z-index: 1;
  position: absolute;
  height: 100%;
  background-color: transparent;
  @media screen and (min-width: 1300px) {
    position: relative;
    height: auto;
    padding: 0 ${props => props.theme.GAP.REGULAR};
  }
`;

export const LeftButton = styled(ArrowButton)`
  top: 0;
  left: 0;
`;

export const RightButton = styled(ArrowButton)`
  top: 0;
  right: 0;
`;
