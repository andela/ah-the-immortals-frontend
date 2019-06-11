import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.css';
import Validators from '../../services/FormValidators';

const Form = ({ handleSubmit, handleChange, signupdata, errorShow }) => {
  const { checkInput, passwordMatchMsg } = Validators;
  const errors = signupdata.errors;
  return (
    <form onSubmit={handleSubmit} className="modal-form" name="modal-form">
      <div className="form-row">
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          onKeyUp={() => checkInput('modal-form', 'signupSubmit')}
          name="email"
          className={`form-control ${errors.email && errorShow.email ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.email && errorShow.email ? errors.email[0] : null}</div>
      </div>
      <div className="form-row">
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          onKeyUp={() => checkInput('modal-form', 'signupSubmit')}
          name="username"
          className={`form-control ${errors.username && errorShow.username ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.username && errorShow.username ? errors.username[0] : null}</div>
      </div>
      <div className="form-row">
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          onKeyUp={() => checkInput('modal-form', 'signupSubmit')}
          name="password"
          className={`form-control ${(errors.password || errorShow.passwdError) && errorShow.password ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{(errors.password || errorShow.passwdError) ? passwordMatchMsg(errors, errorShow) : null}</div>
      </div>
      <div className="form-row">
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="password_confirm"
          onKeyUp={() => checkInput('modal-form', 'signupSubmit')}
          className="form-control" />
      </div>
      <div className="form-row">
        <input
          type="submit"
          id="signupSubmit"
          disabled
          className="form-control btn" value="SIGN UP"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  signupdata: PropTypes.object.isRequired,
  errorShow: PropTypes.object.isRequired
};

export default Form;
