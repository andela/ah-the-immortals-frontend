import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles/App.css';

const Navigationbar = ({ showModal, signInShow }) => (
  <div>
    <Navbar className="homenav fixed-top">
      <Navbar.Brand>
        <b className="brand">Authors Haven</b>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: '100%' }}>
          <Nav.Item>
            <Button variant="danger" className="buttons" onClick={showModal}>
              Join now
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="outline-light"
              className="buttons"
              onClick={signInShow}
            >
              Sign In
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

Navigationbar.propTypes = {
  showModal: PropTypes.func.isRequired,
  signInShow: PropTypes.func.isRequired
};

export default Navigationbar;
