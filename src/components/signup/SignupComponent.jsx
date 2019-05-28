import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import PropTypes from 'prop-types';
import Form from './FormComponent';
import '../../styles/style.css';

library.add(faFacebook, faTwitter, faGooglePlus);

const SignupModal = ({ show, closeModal, handleSubmit, handleChange}) => {
  return (
    <Modal
      show={show}
      onHide={closeModal}
      size="lg"
    >
      <Modal.Header
        closeButton
      >
        <Modal.Title>
          <Container className="signup-modal">
            <p>Sign Up</p>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <p>Or Signup with</p>
        <div className="round-icon">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="facebook" />
          <FontAwesomeIcon icon={['fab', 'google-plus']} className="google" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

SignupModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SignupModal;
