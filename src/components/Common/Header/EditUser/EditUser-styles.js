import styled from 'styled-components';
import { pairCss } from 'styles/mixins';

export const Container = styled.div`
  justify-self: flex-end;
  button:first-child,
  a:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:nth-child(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }
`;

export const InputContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  ${pairCss.inputButton()}
`;

export const NickNameText = styled.input`
  all: unset;
  flex: 1;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  transition: ${props => props.theme.TRANSITION.REGULAR};
  width: 10rem;
`;

export const HelpContainer = styled.div`
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  background-color: ${props => props.theme.DANGER};
  color: white;
  padding: ${props => props.theme.GAP.SMALL};
  margin-right: ${props => props.theme.GAP.REGULAR};
  span {
    font-size: ${props => props.theme.FONT_SIZE.HELP};
  }
`;
