import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.css';

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="modal-form">
      <input
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
        name="email"
        className="form-control" />
      <input
        type="text"
        placeholder="Username"
        required
        onChange={handleChange}
        name="username"
        className="form-control" />
      <input
        type="password"
        required
        placeholder="Password"
        onChange={handleChange}
        name="password"
        className="form-control" />
      <input
        type="password"
        placeholder="Confirm Password"
        required
        onChange={handleChange}
        name="password_confirm"
        className="form-control" />
      <input
        type="submit"
        className="form-control btn" value="SIGN UP"
      />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
