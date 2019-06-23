import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ShareArticlesButtonsComponent from './ShareArticlesButtonsComponent';

class ShareModal extends React.Component {
  static propTypes = {article:PropTypes.object.isRequired};
  state = {show: false,};
  handleShow = () => {this.setState({show: true});};
  handleClose = () => {this.setState({show: false});};
  render() {
    const { show } = this.state;
    const { article } = this.props;
    return (
      <div className="share-modal-popup">
        <button className="btn btn-link" id="modal" type="button" onClick={this.handleShow}>
          <img src="https://img.icons8.com/ios/24/000000/share-filled.png" alt="share" />
        </button>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="share-modal-popup-title">Share a link </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="share-modal-buttons">
              <ShareArticlesButtonsComponent article={article} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" id="close-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ShareModal;
