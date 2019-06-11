import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../styles/App.css';

const DammyNav = () => (
  <div>
    <Navbar className="homenav fixed-top">
      <Navbar.Brand>
        <b className="brand">Authors Haven</b>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: '100%' }}>
          <Nav.Item>
            <Link to="/profile">
              <Button variant="outline-light" className="buttons prifile-button">Profile</Button>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="outline-light"
              className="buttons"
              
            >
              Log out
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default DammyNav;
