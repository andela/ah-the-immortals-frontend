import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import resetPasswordLinkAction from '../../redux/actions/passwordReset.action';
import { errorHandler } from '../../services/toastReusable';

/** 
 * @returns Class for password change 
 */

class PasswordResetForm extends Component {
  state = { email: '', resetError: false};
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      resetError: false
    }
    );
  };
  handleSubmit = (e) => {
    const { resetPasswordLinkAction } = this.props;
    e.preventDefault();
    this.setState({
      resetError: true
    });
    resetPasswordLinkAction(this.state);
  };


  /** 
   * @renders form for password change
   * */

  render() {
    const { email } = this.state;
    const { resetError } = this.state;
    const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const { errors } = this.props;
    const error = errorHandler(errors);
    return (
      <div>
        <Container className="reset">
          <div>
            <h1 className="resetmessage">
        Let&apos;s find your account
            </h1>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormControl name="email" type="email" placeholder="Please enter your email" onChange={this.handleChange} className={`form-control ${error && resetError ? 'is-invalid' : ''}`} required />
            <div className="invalid-feedback">{error && resetError  ? error : null}</div>
            <div className="reset-buttons">
              <Link to="/"><Button variant="outline-danger" className="reset-buttons">Cancel</Button></Link>
              <Button variant="primary" type="submit" className="reset-buttons" disabled={!validEmail}>Find account</Button>
            </div>
          </Form>
        </Container>
        
      </div>
    );
  }
}
PasswordResetForm.propTypes = {
  resetPasswordLinkAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = ({resetpasswordlink}) => ({
  errors: resetpasswordlink.errors,
  message: resetpasswordlink.message
});

export default connect(mapStateToProps, { resetPasswordLinkAction })(PasswordResetForm);
