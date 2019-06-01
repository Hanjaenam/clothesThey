import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { hoverEffect } from 'styles/mixins';
import { Button } from 'components/Common/Button/Button-styles';

export const Container = styled.article`
  margin: ${props => props.theme.GAP.REGULAR} 0;
  &:first-child {
    margin-top: 0;
  }
`;

const titleCss = css`
  all: unset;
  display: block;
  padding: ${props => props.theme.GAP.SMALL};
  margin: ${props => props.theme.GAP.SMALL} 0;
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
`;

export const LinkedTitle = styled(NavLink)`
${titleCss}
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  cursor: pointer;
  ${hoverEffect.button()};
`;

export const Title = styled.p`
  ${titleCss}
  user-select:none;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArrowButton = styled(Button)`
  border: 0;
  box-sizing: border-box;
  z-index: 10;
  position: absolute;
  height: 100%;
  @media screen and (min-width: 1300px) {
    position: relative;
    height: auto;
    padding: 0 ${props => props.theme.GAP.REGULAR};
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.PRIMARY};
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
