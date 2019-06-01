import styled from 'styled-components';
import { pairCss } from 'styles/mixins';

export const Container = styled.div`
  grid-column: 1 / span 2;
  margin: ${props => props.theme.GAP.REGULAR};
  margin-bottom: 0;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  ${pairCss.inputButton('textarea')}
  box-sizing:border-box;
  padding: ${props => props.theme.GAP.REGULAR};
`;

export const TextArea = styled.textarea`
  all: unset;
  flex: 1;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  box-sizing: border-box;
  padding: ${props => props.theme.GAP.REGULAR};
  font-size: 1rem;
  font-weight: 400;
`;
