import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './homeFooter';
import Navbar from './homeNavbar';
import HomePage from './homeInfo';

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="homepage">
          <HomePage />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
