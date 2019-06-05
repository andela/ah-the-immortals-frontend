import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.css';

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="modal-form">
      <label htmlFor="email">
        Email
        <br />
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          className="form-control" />
      </label>
      <br />
      <label htmlFor="username">
        Username
        <br />
        <input
          type="text"
          required
          onChange={handleChange}
          name="username"
          className="form-control" />
      </label>
      <br />
      <label htmlFor="password">
        Password
        <br />
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          className="form-control" />
      </label>
      <br />
      <label htmlFor="password-confirm">
        Confirm Password
        <input
          type="password"
          required
          onChange={handleChange}
          name="password_confirm"
          className="form-control" />
      </label>
      <br />
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
