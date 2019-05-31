import styled from 'styled-components';
import { hoverEffect } from 'styles/mixins';

export const Container = styled.article`
  height: ${props => props.theme.SIZE.PHOTO.BOARD};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  margin: ${props => props.theme.GAP.SMALL} auto;
  padding: ${props => props.theme.GAP.SMALL};
  display: flex;
  background: white;
  position: relative;
  width: ${props => `${props.theme.breakpoints.md}px`};
`;

export const ThumbnailContainer = styled.div`
  height: 100%;
  width: ${props => props.theme.SIZE.PHOTO.BOARD};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.article`
  flex: 1;
  padding: 0 ${props => props.theme.GAP.LARGE};
  padding-top: ${props => props.theme.GAP.REGULAR};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: ${props => props.theme.GAP.REGULAR};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
  font-weight: 600;
  margin-bottom: ${props => props.theme.GAP.SMALL};
  text-indent: ${props => props.theme.GAP.SMALL};
`;

export const Content = styled.p`
  overflow-y: scroll;
  line-height: 1.6;
`;

export const ItemList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${props => props.theme.PRIMARY};
  padding-top: ${props => props.theme.GAP.SMALL};
`;

export const Item = styled.div`
  padding: ${props => props.theme.GAP.SMALL};
  transition: 0.5s;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  ${hoverEffect.button('black')};
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${props => props.theme.GAP.SMALL};
  cursor: pointer;
`;

export const LikeNumber = styled.span``;

export const CommentNumber = styled.span``;
