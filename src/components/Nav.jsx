import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="homenav fixed-top">
          <Navbar.Brand><Link to="/" className="brand-text"><b>Authors Haven</b></Link></Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: '100%' }}>
              <Nav.Item><Link to="#null"><Button variant="danger" className="buttons">Join now</Button></Link></Nav.Item> 
              <Nav.Item><Link to="#null"><Button variant="outline-light" className="buttons">Sign In</Button></Link></Nav.Item> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;

