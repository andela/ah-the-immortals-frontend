import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavigationBar from '../../components/Nav';
import resetPasswordLinkAction from '../../redux/actions/passwordReset.action';

/** 
 * @returns Class for password change 
 */
class PasswordResetForm extends Component {
  state = {};
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }
    );
  };
  handleSubmit = (e) => {
    // eslint-disable-next-line no-shadow
    const { resetPasswordLinkAction } = this.props;
    e.preventDefault();
    resetPasswordLinkAction(this.state);
  }
  render() { 
    return (
      <div>
        <NavigationBar />
        <Container className="reset">
          <div>
            <h1 className="resetmessage">
        First, let&apos;s find your account
            </h1>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormControl name="email" type="email" placeholder="Please enter your email" onChange={this.handleChange} className="confirm-input" required />
            <div className="reset-buttons">
              <Link to="/"><Button variant="outline-danger" className="reset-buttons">Cancel</Button></Link>
              <Button variant="primary" type="submit" className="reset-buttons">Find account</Button>
            </div>
          </Form>
        </Container>
        
      </div>
    );
  }
}
PasswordResetForm.propTypes = {
  resetPasswordLinkAction: PropTypes.func.isRequired,
};
const mapStateToProps = ({resetpasswordlink}) => ({
  errors: resetpasswordlink.errors,
  message: resetpasswordlink.message
});

export default connect(mapStateToProps, { resetPasswordLinkAction })(PasswordResetForm);
