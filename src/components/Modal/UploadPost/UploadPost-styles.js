import styled from 'styled-components';
import * as jss from 'components/Board/Post/Post-styles';
import { hoverEffect, placeholderEffect, focusedEffect } from 'styles/mixins';

export const UploadPostContainer = styled(jss.Container)`
  transform: translateY(40%);
  padding-top: ${props => props.theme.GAP.REGULAR};
  padding-bottom: ${props => props.theme.GAP.REGULAR};
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.ALPHA};
  }
`;

export const UploadPhotoContainer = styled(jss.ThumbnailContainer)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const PreviewImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const InputFileLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  display: inline-block;
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const InputFile = styled(jss.Thumbnail)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CloseButton = styled.input`
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border-radius: ${props => props.theme.BORDER_RADIUS.REGULAR};
  padding: 0 ${props => props.theme.GAP.SMALL};
  ${hoverEffect.button()};
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  button {
    flex: 1;
    text-align: center;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-child(2) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const InputContatiner = styled.div`
  ${props =>
    props.type === undefined
      ? placeholderEffect()
      : placeholderEffect(props.type)};
  textarea ~ span {
    top: 5%;
  }
`;

export const InputTitle = styled(jss.Title).attrs(() => ({
  as: 'input',
  type: 'text',
}))`
  all: unset;
  margin: 0;
  width: 100%;
  font-size: 1.3rem;
  ${focusedEffect()}
  box-sizing:border-box;
  padding: ${props => props.theme.GAP.SMALL};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
`;

export const UploadContentContainer = styled(jss.ContentContainer)`
  padding-top: 0;
`;

export const TextArea = styled(jss.Content).attrs(() => ({
  as: 'textarea',
}))`
  all: unset;
  font-size: 1rem;
  ${focusedEffect()}
  width:100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.GAP.SMALL};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
`;

export * from 'components/Board/Post/Post-styles';
