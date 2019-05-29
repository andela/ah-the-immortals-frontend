import React from 'react';
import { Container , Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import '../../styles/style.css';
import '../../styles/App.css'; 
import LogInForm from './LogInForm';

library.add(faFacebook, faTwitter, faGooglePlus);

const LogInModal = ({
  closeModal,
  signInShow,
  handleChange,
  handleSignInSubmit
}) => {
  return (
    <Modal show={signInShow} onHide={closeModal}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="shadow-lg p-3 mb-5 bg-white rounded form-div">
          <p>Sign In</p>
          <LogInForm
            handleChange={handleChange}
            handleSignInSubmit={handleSignInSubmit}
          />
          <h2><span className="bg-light">OR</span></h2>
          <div className="round-icon">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="twitter" />
            <FontAwesomeIcon icon={['fab', 'facebook']} className="facebook" />
            <FontAwesomeIcon icon={['fab', 'google-plus']} className="google" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LogInModal.propTypes = {
  signInShow: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSignInSubmit: PropTypes.func.isRequired
};

export default LogInModal;
