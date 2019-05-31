import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { hoverEffect } from 'styles/mixins';

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
  ${props => {
    if (props.title === 'weeklyBest') {
      return css`
        display: flex;
      `;
    }
    return css`
      display: flex;
      justify-content: space-around;
    `;
  }}
`;
