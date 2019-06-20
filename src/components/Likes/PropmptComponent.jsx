import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/Likes.css';

const Prompt = ({ closeModal, show, msg, handlePrompt }) => {
  return (
    <div className="prompt">
      <Modal
        show={show}
        onHide={closeModal}
      >
        <Modal.Header
          closeButton
        >
          <Modal.Title>
            <div className="option-title">
              {msg}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            Sign in to make your opinion count.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            className="mr-auto login-prompt"
            tabIndex={0}
            role="button"
            onKeyUp={() => null}
            onClick={handlePrompt}
          >
            SIGN IN
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Prompt.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handlePrompt: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired
};
export default Prompt;
