import styled, { css } from 'styled-components';

export const ThumbnailContainer = styled.div`
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  overflow: hidden;
  cursor: pointer;
  position: relative;
  width: calc(100% / 3);
  height: calc(100% / 3);
  & + & {
    margin-left: ${props => props.theme.GAP.REGULAR};
    @media screen and (max-width: 1300px) {
      margin-left: ${props => props.theme.GAP.SMALL};
    }
  }
  ${props =>
    props.category === 'Weekly Best'
      ? css`
          max-width: ${props => props.theme.SIZE.PHOTO.WEEKLY_BEST};
          max-height: ${props => props.theme.SIZE.PHOTO.WEEKLY_BEST};
        `
      : css`
          max-width: ${props => props.theme.SIZE.PHOTO.SMALL_BOARD};
          max-height: ${props => props.theme.SIZE.PHOTO.SMALL_BOARD};
        `}
  /* &:first-child,
  &:last-child {
    margin: 0 0;
  } */
  /* show title, like*/
  &:hover .title {
    top: 5px;
    left: 5px;
    opacity: 1;
  }
  &:hover .like {
    bottom: 5px;
    right: 5px;
    opacity: 1;
  }
`;

export const ThumbnailImage = styled.img`
  all: unset;
  width: 100%;
  height: 100%;
`;

export const ThumbnailTitle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: ${props => props.theme.TRANSITION.REGULAR};
`;

export const ThumbnailLike = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: ${props => props.theme.TRANSITION.REGULAR};
`;
