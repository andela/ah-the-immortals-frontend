import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export class Navigationbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="homenav fixed-top">
          <Navbar.Brand href="/"><div className="brand-text"><b>Authors Haven</b></div></Navbar.Brand>
          <div className="margins">
            <Nav>
              <Nav.Link href="#"><Button variant="danger">Join now</Button></Nav.Link> 
              <Nav.Link href="/Login"><Button variant="outline-light">Sign In</Button></Nav.Link> 
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigationbar;

