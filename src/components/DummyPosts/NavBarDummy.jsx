import React from 'react';
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
            <Button variant="danger" className="buttons">
              my profile
            </Button>
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