import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import '../../styles/App.css';
import LogInForm from './LogInForm';
import SocialComponent from './SocialComponent';


const LogInModal = ({
  closeModal,
  signInShow,
  handleChange,
  handleSignInSubmit,
  facebook,
  twitter,
  google,
  handleSignUpLink,
  signindata,
  signInError
}) => {
  return (
    <Modal show={signInShow} onHide={closeModal}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="shadow-lg p-3 mb-5 bg-gray rounded form-div">
          <p>Sign In</p>
          <LogInForm
            handleChange={handleChange}
            handleSignInSubmit={handleSignInSubmit}
            signindata={signindata}
            signInError={signInError}
            closeModal={closeModal}
          />
          <h2><span className="bg-light">OR</span></h2>
          <div className="round-icon">
            <SocialComponent
              facebook={facebook}
              google={google}
              twitter={twitter}
            />
          </div>
        </div>
        <div className="link-text">
          <p>
            To create an account&nbsp;
            <Link to="/sign up" onClick={handleSignUpLink}>Sign Up</Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LogInModal.propTypes = {
  signInShow: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSignInSubmit: PropTypes.func.isRequired,
  facebook: PropTypes.func.isRequired,
  google: PropTypes.func.isRequired,
  twitter: PropTypes.func.isRequired,
  handleSignUpLink: PropTypes.func.isRequired,
  signindata: PropTypes.object.isRequired,
  signInError: PropTypes.bool.isRequired
};

export default LogInModal;
