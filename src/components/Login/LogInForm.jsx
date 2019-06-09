import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Validators from '../../services/FormValidators';


const LogInForm = ({ handleSignInSubmit, handleChange, signindata, signInError }) => {
  const { checkInput } = Validators;
  const errors = signindata.errors;
  return (
    <form onSubmit={handleSignInSubmit} className="modal-form" name="modal-form">
      <div>
        <input
          type="email"
          className={`form-control ${errors.credentials && signInError ? 'is-invalid' : ''}`}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          onKeyUp={() => checkInput('modal-form', 'signInSubmit')} />
        <input
          type="password"
          className={`form-control ${errors.credentials && signInError  ? 'is-invalid' : ''}`}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          onKeyUp={() => checkInput('modal-form', 'signInSubmit')} />
        <div className="invalid-feedback">{errors.credentials && signInError  ? errors.credentials[0] : null}</div>
        <input
          type="submit"
          id="signInSubmit"
          disabled
          className="form-control btn" value="SIGN IN" />
        <div className="reset-div">
          <Link to="/reset" className="passreset-link">Forgot Password?</Link>
        </div>
      </div>
    </form>
  );
};
LogInForm.propTypes = {
  handleSignInSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  signindata: PropTypes.object.isRequired,
  signInError: PropTypes.bool.isRequired
};

export default LogInForm;
