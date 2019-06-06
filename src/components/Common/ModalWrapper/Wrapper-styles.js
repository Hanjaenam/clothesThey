import styled, { keyframes, css } from 'styled-components';
import { modal } from 'styles/mixins';

const modalSignEnterAnimation = css`
  animation: ${keyframes`0%{transform:translateY(-20%)}100%{transform:translateY(0)}`}
    0.25s ease-in both;
`;

const modalSignLeaveAnimation = css`
  animation: ${keyframes`0%{transform:translateY(0)} 100%{transform:translateY(-20%)}`}
    0.25s ease-in both;
`;

// eslint-disable-next-line import/prefer-default-export
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.ALPHA};
  z-index: 2;
  &.enter {
    ${modal.fadeIn}
    .modal-upload {
      ${modal.slideUp}
    }
    .modal-sign {
      ${modalSignEnterAnimation}
    }
  }
  &.leave {
    ${modal.fadeOut}
    .modal-upload {
      ${modal.slideDown}
    }
    .modal-sign {
      ${modalSignLeaveAnimation}
    }
  }
`;
