import React from 'react';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="columns">
      <Row>
        <Col className="col">
          <Container>
            <br />
            <br />
            <h1 className="homepage">Welcome to your articles Community</h1>
            <br />
          </Container>
          <Container className="home">
            <p>
              <b>Who is Authors Haven for?</b>
            </p>
            <p>Anyone looking to inspire and be inspired by ideas</p>
            <p>Join fellow authors and enthusiasts in Authors Haven</p>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
