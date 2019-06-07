import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const LogInForm = ({ handleSignInSubmit, handleChange }) => (
  <form onSubmit={handleSignInSubmit} className="modal-form">
    <label htmlFor="email">
      <input type="email" required className="form-control" name="email" onChange={handleChange} placeholder="Email" />
    </label>
    <label htmlFor="password">
      <input type="password" required className="form-control" name="password" onChange={handleChange} placeholder="Password" />
    </label>
    <Button type="submit" variant="info" className="form-control btn" value="SIGN IN">
        SIGN IN
    </Button>
    <div className="reset-div">
      <Link to="/reset" className="passreset-link">Forgot Password?</Link>
    </div>
  </form>
);

LogInForm.propTypes = {
  handleSignInSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LogInForm;
