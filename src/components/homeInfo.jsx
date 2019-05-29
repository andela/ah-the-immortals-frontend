import React from 'react';
import { Container, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import homepageimage from '../services/images/homepage.png';

const HomePage = () => (
  <div>
    <Row>
      <Col>
        <h1 className="homepage">
              Welcome to your articles
          <br /> 
                Community
        </h1>
        <br />
        <br />
        <Form>
          <FormControl type="text" placeholder="&#xF002;  Find your favourite articles" className="font-awesome" />
        </Form>
        <Container className="home">
          <p><b>Who is Authors Haven for?</b></p>
          <p>Anyone looking to inspire and be inspired by ideas</p>
          <p>Join fellow authors and enthusiasts in Authors Haven</p>
          <Button>Get Started</Button>
        </Container>
      </Col>
      <Col className="homepageimg">
        <img src={homepageimage} alt="" width="450" height="400" />
      </Col>
    </Row>
  </div>
            
);

export default HomePage;
