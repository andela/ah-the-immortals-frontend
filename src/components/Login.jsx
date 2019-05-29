import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import LoginForm from './loginForm';
import LoginInformation from './loginInfo';

class Login extends Component {
  render() {
    return (
      <Row>
        <Col className="left-container">
          <Container>
            <LoginInformation />
          </Container>
        </Col>
        <Col className="right-container">
          <Container>
            <div className="top">
              <p className="form-title">Sign In</p>
              <LoginForm />
            </div>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default Login;
