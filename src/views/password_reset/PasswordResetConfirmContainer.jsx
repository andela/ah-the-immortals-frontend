import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import confirmPasswordResetAction from '../../redux/actions/passwordConfirm.action';

/** 
 * @returns Class for password change 
 */ 

class PasswordResetConfirm extends Component {
  state = { password: '', password_confirm: ''};
  componentWillMount() {
    const { match } = this.props; 
    this.setState({
      token: match.params.token,
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }
    );
  };
  handleSubmit = (e) => {
    // eslint-disable-next-line no-shadow
    const { confirmPasswordResetAction, history } = this.props;
    e.preventDefault();
    confirmPasswordResetAction(this.state, () => history.push('/'));
  }

  /** 
   * @renders form for password confirmation
   * */
  
  render() {
    const { password, password_confirm } = this.state;
    const color = password === password_confirm ? 'passwordStyle' : 'confirmStyle';
    const validPassword = password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})') && password_confirm.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})') && (password.length === password_confirm.length);
    return (
      <div>
        <Container className="reset">
          <div>
            <h1 className="resetmessage">Create your new password.</h1>
            <p>
Password must include at least 8 characters including at least 1 number, 1 special character, 
              <br />
      and atleast two uppercase letters.
            </p>
            <br />
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormControl name="password" id="password" type="password" placeholder="Enter your new password" onChange={this.handleChange} className={`confirm-input ${color}`} required />
            <FormControl name="password_confirm" id="password_confirm" type="password" placeholder="Confirm your new password" onChange={this.handleChange} className={`confirm-input ${color}`} required />
            <div className="reset-buttons">
              <Button variant="primary" type="submit" className="reset-buttons" disabled={!validPassword}>Submit</Button>
            </div>
          </Form>
        </Container>   
      </div>
    );
  }
}
PasswordResetConfirm.propTypes = {
  confirmPasswordResetAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
const mapStateToProps = ({confirmresetpassword}) => ({
  errors: confirmresetpassword.errors,
  message: confirmresetpassword.message
});

export default connect(mapStateToProps, { confirmPasswordResetAction })(PasswordResetConfirm);
