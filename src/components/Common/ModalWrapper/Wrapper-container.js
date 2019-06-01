import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalWrapperView from './Wrapper-view';

class ModalWrapperContainer extends Component {
  state = { animate: false };

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentDidUpdate(prevProps, _prevState) {
    const { visible } = this.props;
    if (prevProps.visible !== visible) {
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  startAnimation = () => {
    this.setState({ animate: true });
    setTimeout(() => {
      this.setState({ animate: false });
    }, 250);
  };

  onKeyUp = e => {
    const { hideModal } = this.props;
    if (e.keyCode === 27) {
      hideModal();
    }
  };

  onClick = e => {
    const { hideModal } = this.props;
    const { target, currentTarget } = e;
    if (target.classList === currentTarget.classList) {
      hideModal();
    }
  };

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;
    const { onClick } = this;
    if (!visible && !animate) return null;
    const animation = animate && (visible ? 'enter' : 'leave');
    return (
      <ModalWrapperView onClick={onClick} className={animation}>
        {children}
      </ModalWrapperView>
    );
  }
}

ModalWrapperContainer.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
export default ModalWrapperContainer;
