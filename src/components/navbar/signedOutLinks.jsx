import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Button } from 'react-bootstrap';
import SignupModal from '../signup/SignupComponent';
import LoginModal from '../Login/LogInModal';

const SignedOutLinks = ({ showModal, show, signInShow, closeModal, handleSubmit, handleSignInShow, handleChange, handleSignUpLink, handleSignInSubmit, facebook, google, twitter, signInError, errorShow, handleSignInLink, signindata, signupdata }) => (
  <ul className="nav ml-auto">
    <Nav.Item>
      <Button
        variant="outline-primary"
        className="buttons"
        onClick={handleSignInShow}
      >
          Sign In
      </Button>
      <LoginModal handleSignUpLink={handleSignUpLink} signInError={signInError} signindata={signindata} handleSignInShow closeModal={closeModal} signInShow={signInShow} handleChange={handleChange} handleSignInSubmit={handleSignInSubmit} facebook={facebook} twitter={twitter} google={google} />
    </Nav.Item>
    <Nav.Item>
      <Button variant="primary" className="buttons" onClick={showModal}>
          Get Started
      </Button>
      <SignupModal errorShow={errorShow} signupdata={signupdata} handleSignInLink={handleSignInLink} showModal={showModal} show={show} closeModal={closeModal} handleChange={handleChange} handleSubmit={handleSubmit} facebook={facebook} twitter={twitter} google={google} />
    </Nav.Item>
  </ul>
);
SignedOutLinks.propTypes = {
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  signInShow: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSignInShow: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSignUpLink: PropTypes.func.isRequired,
  handleSignInSubmit: PropTypes.func.isRequired,
  handleSignInLink: PropTypes.func.isRequired,
  facebook: PropTypes.func.isRequired,
  twitter: PropTypes.func.isRequired,
  google: PropTypes.func.isRequired,
  signInError: PropTypes.bool.isRequired,
  errorShow: PropTypes.object.isRequired,
  signindata: PropTypes.object.isRequired,
  signupdata: PropTypes.object.isRequired
};

export default SignedOutLinks;
