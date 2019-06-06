import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import PropTypes from 'prop-types';
import Form from './FormComponent';
import '../../styles/style.css';

library.add(faFacebook, faTwitter, faGooglePlus);

const SignupModal = ({ show, closeModal, handleSubmit, handleChange }) => {
  return (
    <Modal
      show={show}
      onHide={closeModal}
    >
      <Modal.Header
        closeButton
      >
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="shadow-lg p-3 mb-5 bg-white rounded form-div">
          <Container className="form-header">
            <p>Sign Up</p>
          </Container>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <h2><span>OR</span></h2>
          <div className="round-icon ">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="twitter" />
            <FontAwesomeIcon icon={['fab', 'facebook']} className="facebook" />
            <FontAwesomeIcon icon={['fab', 'google-plus']} className="google" />
          </div>
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
