import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/App.css';

const Navigationbar = () => (
  <div>
    <Navbar className="homenav fixed-top">
      <Navbar.Brand><b className="brand">Authors Haven</b></Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: '100%' }}>
          <Nav.Item><Link to="/login"><Button variant="outline-light" className="buttons">Sign out</Button></Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigationbar;
