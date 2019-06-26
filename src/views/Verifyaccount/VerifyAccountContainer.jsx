import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner, Button } from 'react-bootstrap';
import '../../styles/accountactivate.scss';
import verifyAccountAction from '../../redux/actions/verifyAccount.action';

class VerifyAccount extends Component {
  componentDidMount() {
    this.handleReload();
  }
  handleReload = () => {
    const { match, verifyAccountAction } = this.props;
    const token = match.params.token;
    verifyAccountAction(token);
  };
  render() {
    const { error, isLoading } = this.props;
    return (
      <div>
        { ! isLoading ? (
          <div className="account">
            <h1>Account Activation</h1>
            <div>
              { ! error.response ? (
                <div className="mb-3">
                  <p className="acc-success">Your account has been activated.</p>
                  <br />
                  <br />
                  <Link to="/"><Button id="home" variant="primary">GO TO HOME</Button></Link>
                </div>
              ): (
                <div className="mb-3">
                  <p className="acc-error">Oops! Something went wrong.</p>
                  <Button id="try" onClick={this.handleReload} variant="danger">TRY AGAIN!</Button>
                </div>
              )}
            </div>
          </div>
        ): (
          <div className="account-load">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </div>
    );
  }
}

VerifyAccount.propTypes = {
  verifyAccountAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({verification}) => ({
  error: verification.error,
  isLoading: verification.isActivating
});

export default connect(mapStateToProps, { verifyAccountAction })(VerifyAccount);
