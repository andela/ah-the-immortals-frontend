import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './HomeFooter';
import HomePage from './HomeInfo';
import Posts from '../../views/Articles/Posts';

class Home extends Component {

  render = () => {
    return (
      <div>
        <div className="background">
          <Container className="homepage">
            <HomePage />
          </Container>
        </div>
        <Container>
          <Posts />
        </Container>
        <Footer />
      </div>
    );
  };
}


export default Home;
