import React, { Component } from 'react';
import { Overlay, ContainerModal } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }

  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };

  hideModal = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };
  render() {
    return (
      <Overlay onClick={this.hideModal}>
        <ContainerModal>
          <img src={this.props.props} alt="" />
        </ContainerModal>
      </Overlay>
    );
  }
}
